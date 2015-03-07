(ns vita.base.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [vita.utils.log :as log]
            [vita.base.atom :as atom]
            [vita.base.socket :as socket]
            [vita.base.bus :refer [on-many]]

            [cljs.core.async :refer [<!]]))

;; KEYS
;; ids-keys mapping is persistent across reloads
(defonce ^:private last-key         (atom 0))
(defonce ^:private ids-keys-mapping (atom {}))
(defn- register-id-key-pair [id key]
  (swap! ids-keys-mapping assoc id key))
(defn- next-key []
  (swap! last-key inc))
(defn- key-for-id [id]
  (when-not (contains? @ids-keys-mapping id)
    (register-id-key-pair id (next-key)))
  (get @ids-keys-mapping id))


;; STATE
(defonce ^:private state
  (atom {:atoms    [] ;; atom/AtomInfo
         :ws-items [] ; atom/InfoAtoms
         :search-term ""}))

(defn- key-by-id
  "Get local atom key by specified atom id."
  [id]
  (->> (:atoms @state)
       (filter #(= id (:id %)))
       first
       (:key)))

(defn- id-by-key
  "Get atom id by local key."
  [key]
  (->> (:atoms @state)
       (filter #(= key (:key %)))
       first
       (:id)))

;; helpers
(defn- atoms-update [updater]
  (swap! state #(assoc % :atoms (updater (:atoms %)))))

(defn- atom-update! [key updater]
  (atoms-update
   #(map (fn [atom]
           (if (= key (:key atom))
             (updater atom)
             atom)) %)))

(defn- ws-items-update [updater]
  (swap! state #(assoc % :ws-items (updater (:ws-items %)))))

(defn- ws-add!
  "Add new item to the workspace."
  [item]
  (ws-items-update #(cons item %)))

(defn- ws-update!
  "Update atom with specified key."
  [key updater]
  (ws-items-update
   #(map (fn [atom]
           (if (= key (:key atom))
             (updater atom)
             atom)) %)))

(defn- ws-mark-active! [key]
  (ws-items-update
   #(map (fn [atom]
           (assoc atom
                  :active (= key (:key atom)))) %)))

(defn- ws-close! [key]
  (ws-items-update
   (fn [items]
     (remove (fn [atom] (= key (:key atom))) items))))

(defn- ws-get [key]
  (first (filter #(= key (:key %)) (:ws-items @state))))

(defn- ws-is-open? [key ws-items]
  (some true? (map #(= key (:key %)) ws-items)))

(defn- atom-has-term? [atom term]
  (if (pos? (count term))
    (-> (:name atom)
        (.toLowerCase)
        (.indexOf (.toLowerCase term))
        (> -1))
    true))

(defn- update-visibility [term atoms]
  (map #(assoc % :visible (atom-has-term? % term)) atoms))

;; SERVER EVENTS HANDLER

(defn- reload-atoms-list []
  (go
    (let [[items err] (<! (socket/read-atoms-list))]
      (if err
        (log/error "can't load atoms list: " err)
        (do
          (log/info "received list of %s atoms" (count items))
          (swap! state assoc :atoms
                 (->>
                  (map atom/json->info items)
                  (map #(assoc % :key (key-for-id (:id %))))
                  (update-visibility (:search-term @state))
                  (sort-by :name))))))))


;; PUBLIC

(defn install-handlers! []
  (on-many

   ;; request atoms list after socket connected
   :socket-open reload-atoms-list

   ;; SEARCH PANEL EVENTS

   :search-update
   (fn [term]
     (when-not (= term (:search-term @state))
       (log/info "new search term:" term)
       (let [atoms (->>
                    (:atoms @state)
                    (update-visibility term))]
         (swap! state assoc
                :search-term term
                :atoms atoms))))

   ;; WORKSPACE EVENTS

   ;; request atom if it's not already open in workspace
   :ws-open
   (fn [key]
     (if (ws-is-open? key (:ws-items @state))
       (ws-mark-active! key)
       (go
         (let [id             (id-by-key key)
               [atom-str err] (<! (socket/read-atom id))]
           (if err
             (log/error "can't open atom %s: %s" id err)
             (do
               (log/info "open atom " id)
               (-> atom-str
                   atom/json->atom
                   (assoc :key key :state :view)
                   ws-add!)
               (ws-mark-active! key)))))))

   :ws-close ws-close!

   :ws-edit
   (fn [key] (ws-update! key #(assoc % :state :edit)))

   :ws-preview
   (fn [key] (ws-update! key #(assoc % :state :preview)))

   :ws-save
   (fn [key]
     (let [atom   (ws-get key)
           json   (atom/atom->json atom)
           is-new (nil? (:id atom))]
       (go
         (if is-new

           ;; CREATE
           (let [[data err] (<! (socket/create-atom json))]
             (if err
               (log/error "can't create atom: %s %s" err (str data))
               (do
                 (log/info "created atom " data)
                 (ws-update! key #(assoc % :state :view :id data))

                 (register-id-key-pair data key)
                 (reload-atoms-list))))

           ;; UPDATE
           (let [[data err] (<! (socket/update-atom json))]
             (if err
               (log/error "can't save atom: %s %s" err (str data))
               (do
                 (log/info "saved atom " (:id atom))
                 (ws-update! key #(assoc % :state :view))

                 (reload-atoms-list))))))))

   :ws-delete
   (fn [key]
     (let [id (id-by-key key)]
       (go
         (<! (socket/delete-atom id))
         (log/info "deleted atom " id)
         (atoms-update (fn [atoms] (remove #(= id (:id %)) atoms)))
         (ws-close! key))))

   :ws-new
   (fn []
     (ws-add!
      (-> (atom/new-atom :record)
          (assoc :key (next-key) :state :edit))))))


(defn watch! [func]
  (add-watch state :render (fn [_ _ _ data] (func data))))

(defn trigger-update!
  "Force state update event"
  []
  (reset! state @state))
