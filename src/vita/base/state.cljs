(ns vita.base.state
  (:require [vita.utils.log :as log]
            [vita.base.atom :as atom]
            [vita.base.socket :as socket]
            [vita.base.bus :as bus :refer [on]]))

;; KEYS
(def ^:private rec-keys (atom 0))
(defn- next-key [] (swap! rec-keys inc))

;; STATE
(defonce ^:private state
  (atom {:atoms {} ;; 123: atom/AtomInfo
         :ws-items '() ; list of InfoAtoms
         :search-term ""
         :connected false}))

(defn- key-by-id [id]
  "Get local atom key by specified atom id."
  (first (for [[k v] (:atoms @state)
               :when (= id (:id v))]
           k)))

(defn- id-by-key
  "Get atom id by local key."
  [key]
  (-> (:atoms @state)
      (get key)
      (:id)))

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

(on :atoms-list
    (fn [items]
      (log/info "loading list of %s atoms" (count items))
      (swap! state
             assoc :atoms
             (->> items
                  (map atom/json->info)
                  (zipmap (repeatedly next-key))))))

(on :atom
    (fn [item]
      (let [atom (atom/json->atom item)
            key  (key-by-id (:id atom))]
        (log/info "open atom %s" (str atom))
        (ws-add! (assoc atom :key key :state :view)))))

(on :search-update
    (fn [term]
      (log/info "new search term: %s" term)
      (swap! state assoc :search-term term)))

(on :socket-open
    #(do (swap! state assoc :connected true)
         ;; request atoms list on init
         (socket/send :atoms-list-read nil)))

(on :socket-closed #(swap! state assoc :connected false))

;; WS events
(on :ws-open
    (fn [key]
      (when-not (ws-is-open? key (:ws-items @state))
        (socket/send :atom-read (id-by-key key)))))

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
      (ws-update! key
                  (fn [a]
                    (socket/send :atom-update (atom/atom->json a))
                    (assoc a :state :view)))))

;; PUBLIC

(defn watch! [func]
  (add-watch state :render (fn [_ _ _ data] (func data))))

(defn trigger-update!
  "Force state update event"
  []
  (reset! state @state))
