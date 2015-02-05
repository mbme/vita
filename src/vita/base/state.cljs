(ns vita.base.state
  (:require [vita.utils.log :as log]
            [vita.base.atom :as atom :refer [id]]
            [vita.base.socket :as socket]
            [vita.base.bus :as bus :refer [on]]))

;; KEYS
(def ^:private rec-keys (atom 0))
(defn- next-key [] (swap! rec-keys inc))

;; STATE
(defonce ^:private state
  (atom {:atoms-list {} ;; 123: AtomId
         :ws-items '() ; list of InfoAtoms
         :search-term ""}))

(defn- key-by-atom-id [id]
  "Get local atom key by specified atom id."
  (first (for [[k v] (:atoms-list @state)
               :when (.equals id v)]
           k)))

(defn- atom-id-by-key
  "Get atom id by local key."
  [key]
  (get (:atoms-list @state) key))

(defn- ws-items-update [fn]
  (swap! state #(assoc % :ws-items (fn (:ws-items %)))))

(defn- ws-add! [item]
  "Add new item to the workspace."
  (ws-items-update #(conj % item)))

(defn- ws-update! [key updater]
  "Update atom with specified key."
  (ws-items-update
   #(map (fn [atom]
           (if (= key (:key atom))
             (updater atom)
             atom)) %)))

(defn- ws-get [key]
  (first (filter #(= key (:key %)) (:ws-items @state))))

(defn- ws-is-open? [key ws-items]
  (some true? (map #(= key (:key %)) ws-items)))


;; SERVER EVENTS HANDLER

(defn- req-atom [{:keys [type name]}]
  (socket/send :req-atom {:type type :name name}))

(on :atoms-list
    (fn [items]
      (log/info "loading list of %s atoms" (count items))
      (swap! state
             assoc :atoms-list
             (into {} (map #(vector (next-key) (atom/read-id %)) items)))))

(on :atom
    (fn [item]
      (let [atom (atom/read item)
            key  (key-by-atom-id (atom/id atom))]
        (log/info "open atom %s" (str atom))
        (ws-add! (assoc atom :key key :state :view)))))

(on :search-update
    (fn [term]
      (log/info "new search term: %s" term)
      (swap! state assoc :search-term term)))

;; request atoms list on init
(on :socket-open #(socket/send :req-atoms-list))

;; WS events
(on :ws-open
    (fn [key]
      (when-not (ws-is-open? key (:ws-items @state))
        (req-atom (atom-id-by-key key)))))

(on :ws-close
    (fn [key]
      (ws-items-update
       (fn [items]
         (remove (fn [atom] (= key (:key atom))) items)))))

(on :ws-edit
    (fn [key] (ws-update! key #(assoc % :state :edit))))

(on :ws-preview
    (fn [key] (ws-update! key #(assoc % :state :preview))))

(on :ws-save
    (fn [key]
      ;; FIXME impelment save
      (ws-update! key #(assoc % :state :view))))

;; PUBLIC

(defn watch! [func]
  (add-watch state :render (fn [_ _ _ data] (func data))))

(defn trigger-update!
  "Force state update event"
  []
  (reset! state @state))
