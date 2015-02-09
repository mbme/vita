(ns vita.base.socket
  (:require [vita.base.bus :as bus]
            [vita.utils.log :as log]))

(defn- socket-create
  "Creates new websocket connection"
  [addr]
  (let [s    (js/WebSocket. addr)
        send (.bind (.-send s) s)]

    (aset s "onopen"
          #(do
             (log/info "websocket: open")
             (bus/trigger :socket-open)))

    (aset s "onerror"
          #(do
             (log/error "websocket: error: %o" %)
             (bus/trigger :socket-error)))

    (aset s "onclose"
          #(do
             (log/info "websocket: closed")
             (bus/trigger :socket-closed)))

    ;; handle server messages, parse and
    ;; convert them to clojure data structures
    (aset s "onmessage"
          (fn [evt]
            (log/debug "websocket: message " (.-data evt))
            (let [{:strs [action
                          params]} (->> (.-data evt)
                                        (.parse js/JSON)
                                        js->clj)]
              ;; trigger server events on local bus
              (bus/trigger (keyword action) params))))

    ;; better .send which converts clojure
    ;; data structures to JSON and serializes it
    (aset s "send"
          #(->> (clj->js %)
                (.stringify js/JSON)
                send))
    s))

(defonce ^:private socket       (atom nil))
(defonce ^:private socket-queue #js [])

(defn- add-to-queue [req]
  (.push socket-queue req))
(defn- send-queue []
  (let [s @socket]
    (.forEach socket-queue #(.send s %))
    (aset socket-queue "length" 0)))

(bus/on :socket-open   send-queue)
(bus/on :socket-closed #(reset! socket nil))


;; PUBLIC

(defn send [action params]
  (let [s @socket
        req {:action action
             :params params}]
    (if s
      (.send s req)
      (add-to-queue req))))

(defn connect-maybe
  "Connect WebSocket if not connected."
  [addr]
  (when-not @socket
    (log/info "websocket: not open, connecting...")
    (reset! socket (socket-create addr))))

(defn connect! [addr interval]
  (log/info "websocket: server %s" addr)
  (log/info "websocket: auto reconnect every %s ms" interval)
  (connect-maybe addr)
  (js/setInterval connect-maybe interval addr))
