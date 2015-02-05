(ns vita.base.socket
  (:require [vita.base.bus :as bus]
            [vita.utils.log :as log]))

(defn- socket-create
  "Creates new websocket connection"
  [addr]
  (let [s (js/WebSocket. addr)
        send (.-send s)]

    (aset s "onopen"
          #(do
             (log/info "websocket: open")
             (bus/trigger :socket-open)))

    (aset s "onerror"
          #(log/error "websocket: error: %s" %))

    (aset s "onclose"
          #(do
             (log/info "websocket: closed")
             (bus/trigger :socket-closed)))

    ;; handle server messages, parse and
    ;; convert them to clojure data structures
    (aset s "onmessage"
          (fn [evt]
            (log/debug "websocket: message " (.-data evt))
            (let [{action "action"
                   params "params"} (->> (.-data evt)
                                         (.parse js/JSON)
                                         js->clj)]
              ;; trigger server events on local bus
              (bus/trigger (keyword action) params))))

    ;; better .send which converts clojure
    ;; data structures to JSON and serializes it
    (aset s "send"
          #(.call send s (.stringify js/JSON (clj->js %))))
    s))

(defonce ^:private socket (socket-create "ws://test.dev:8081/ws"))

(defn send
  ([action] (send action nil))
  ([action params]
   (.send socket {:action action :params params})))
