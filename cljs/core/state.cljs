(ns core.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [core.log :as log]
            [core.atom :as atom]
            [core.socket :as socket]
            [core.bus :as bus]

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
         :ws-items [] ;; atom/VitaAtom
         }))

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

(defn- atoms-update
  "Apply `updater' to atoms."
  [updater]
  (swap! state #(assoc % :atoms (updater (:atoms %)))))

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

(defn- ws-close! [key]
  (ws-items-update
   (fn [items]
     (remove (fn [atom] (= key (:key atom))) items))))

(defn- ws-get [key]
  (first (filter #(= key (:key %)) (:ws-items @state))))

(defn- ws-is-open? [key ws-items]
  (some true? (map #(= key (:key %)) ws-items)))


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
                  items
                  (map #(assoc % :key (key-for-id (:id %))))
                  (sort-by :name))))))))

;; PUBLIC

(defn install-handlers! []
  ;; request atoms list after socket connected
  (bus/on :socket-open reload-atoms-list)

  ;; WORKSPACE EVENTS

  ;; request atom if it's not already open in workspace
  (bus/on :ws-open
          (fn [key]
            (when-not (ws-is-open? key (:ws-items @state))
              (go
                (let [id             (id-by-key key)
                      [atom err] (<! (socket/read-atom id))]
                  (if err
                    (log/error "can't open atom %s: %s" id err)
                    (do
                      (log/info "open atom " id)
                      (-> atom
                          (assoc :key key)
                          ws-add!))))))))

  (bus/on :ws-close ws-close!)

  (bus/on :ws-save
          (fn [atom]
            (let [key    (:key atom)
                  is-new (nil? (:id atom))]
              (go
                (if is-new

                  ;; CREATE
                  (let [[data err] (<! (socket/create-atom atom))]
                    (if err
                      (log/error "can't create atom: %s %s" err (str data))
                      (do
                        (log/info "created atom " (:id data))
                        (ws-update! key #(merge atom data))

                        (register-id-key-pair (:id data) key)
                        (reload-atoms-list))))

                  ;; UPDATE
                  (let [[data err] (<! (socket/update-atom atom))]
                    (if err
                      (log/error "can't save atom: %s %s" err (str data))
                      (do
                        (log/info "saved atom " (:id atom))
                        (ws-update! key #(merge atom data))

                        (reload-atoms-list)))))))))

  (bus/on :ws-delete
          (fn [key]
            (let [id (id-by-key key)]
              (go
                (<! (socket/delete-atom id))
                (log/info "deleted atom " id)
                (atoms-update (fn [atoms] (remove #(= id (:id %)) atoms)))
                (ws-close! key)))))

  (bus/on :ws-new
          (fn []
            (ws-add!
             (-> (atom/new-atom :record)
                 (assoc :key (next-key)))))))


(defn watch! [func]
  (add-watch state :render (fn [_ _ _ data] (func data))))

(defn trigger-update!
  "Force state update event"
  []
  (reset! state @state))
