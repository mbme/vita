(ns vita.state
  (:require [vita.log :as log :include-macros true]
            [vita.atom :as atom :refer [id]]))

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

;; EVENT BUS (ACTIONS)
(defonce events (atom {}))

(defn on
  "Register `handler' for `action'."
  [action handler]
  (swap! events
         (fn [events]
           (assoc events action
                  ;; if this action already has handlers then add
                  ;; new handler to the set, else create new set
                  (if-let [handlers (get events action)]
                    (conj handlers handler)
                    #{handler})))))

(defn trigger
  "Dispatch `action' with `params'."
  [action & params]
  ;; run all action handlers with specified params
  (log/debug "trigger action %s handlers %s"
             action (count (get @events action)))
  (doseq [handler (get @events action)] (apply handler params)))


;; SERVER EVENTS HANDLER
(defn socket-create
  "Creates new websocket connection"
  [addr]
  (let [s (js/WebSocket. addr)
        send (.-send s)]
    (aset s "onopen"    (fn []
                          (log/info "websocket: open")
                          (trigger :socket-open)))
    (aset s "onerror"   #(log/error "websocket: error: %s" %))
    (aset s "onclose"   (fn []
                          (log/info "websocket: closed")
                          (trigger :socket-closed)))
    ;; handle server messages, parse and
    ;; convert them to clojure data structures
    (aset s "onmessage"
          (fn [evt]
            (let [data (.parse js/JSON (.-data evt))
                  {:keys [action params]} (js->clj data :keywordize-keys true)]
              (log/debug "websocket: message " data)
              ;; trigger server events on local bus
              (trigger (keyword action) params))))
    ;; better .send which converts clojure
    ;; data structures to JSON and serializes it
    (aset s "send"
          #(.call send s (.stringify js/JSON (clj->js %))))
    s))

(defonce socket (socket-create "ws://test.dev:8081/ws"))

(defn- send
  ([action params] (.send socket {:action action :params params}))
  ([action] (send action nil)))

(defn- req-atom [{:keys [type name]}]
  (send :req-atom {:type type :name name}))

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

;; request records list on init
(on :socket-open #(send :req-atoms-list))

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
