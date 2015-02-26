(ns vita.base.state
  (:require [vita.utils.log :as log]
            [vita.base.atom :as atom]
            [vita.base.socket :as socket]
            [vita.base.bus :as bus :refer [on]]))

;; KEYS
(let [last-key (volatile! 0)]
  (defn- next-key []
    (vswap! last-key inc)))

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

(defn- ws-items-update [fn]
  (swap! state #(assoc % :ws-items (fn (:ws-items %)))))

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

(on :atoms-list
    (fn [items]
      (log/info "received list of %s atoms" (count items))
      (swap! state
             assoc :atoms
             (->> (map atom/json->info items)
                  (map #(assoc % :key (next-key)))
                  (update-visibility (:search-term @state))
                  (sort-by :name)))))

(on :search-update
    (fn [term]
      (when-not (= term (:search-term @state))
        (log/info "new search term:" term)
        (let [atoms (->>
                     (:atoms @state)
                     (update-visibility term))]
          (swap! state assoc
                 :search-term term
                 :atoms atoms)))))

(on :socket-open ;; request atoms list after socket connected
    #(socket/send :atoms-list-read nil))

;; WS events

(on :ws-open
    (fn [key]
      (when-not (ws-is-open? key (:ws-items @state))
        (socket/send :atom-read (id-by-key key)))))

(on :atom
    (fn [item]
      (let [atom (atom/json->atom item)
            key  (key-by-id (:id atom))]
        (log/info "open atom %s" (str atom))
        (ws-add! (assoc atom :key key :state :view)))))

(on :ws-close ws-close!)

(on :ws-edit
    (fn [key] (ws-update! key #(assoc % :state :edit))))

(on :ws-preview
    (fn [key] (ws-update! key #(assoc % :state :preview))))

(on :ws-save
    (fn [key]
      (ws-update! key
                  (fn [a]
                    (log/info "saving atom " (:id a))
                    (socket/send :atom-update (atom/atom->json a))
                    (assoc a :state :view)))))

(on :ws-delete
    (fn [key]
      (let [id (id-by-key key)]
        (log/info "deleting atom " id)
        (socket/send :atom-delete (id-by-key key))
        (ws-close! key))))

(on :ws-new
    (fn [] (ws-add! (-> (atom/new-atom :record)
                        (assoc :key (next-key) :state :edit)))))

;; PUBLIC

(defn watch! [func]
  (add-watch state :render (fn [_ _ _ data] (func data))))

(defn trigger-update!
  "Force state update event"
  []
  (reset! state @state))
