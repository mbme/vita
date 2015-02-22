(ns vita.base.socket
  (:require [vita.base.bus :as bus]
            [vita.utils.log :as log]))

(defonce ^:private socket (atom nil))
(defonce ^:private socket-queue (volatile! []))

(defn- add-to-queue [req]
  (vswap! socket-queue conj req))

(defn- send-queue []
  (let [s     @socket
        queue @socket-queue]
    (when-not (or (nil? s)
                  (empty? queue))
      (log/info "websocket: sending %s queued messages" (count queue))
      (vreset! socket-queue [])
      (doseq [req queue] (.send s req)))))

(declare connected?)
(defn- socket-connect [addr]
  (let [s    (js/WebSocket. addr)
        handle (fn [name handler] (aset s name handler))
        send (.bind (.-send s) s)]

    (handle "onopen"
            (fn []
              (log/info "websocket: open")

              (reset! socket s)
              (send-queue)

              (bus/trigger :socket-open)))

    (handle "onerror"
            #(when (connected?)
               (log/error "websocket: error: %o" %)
               (bus/trigger :socket-error)))

    ;; handle server messages, parse and
    ;; convert them to clojure data structures
    (handle "onmessage"
            (fn [evt]
              (let [{:strs [action
                            params]}
                    (->> (.-data evt)
                         (.parse js/JSON)
                         js->clj)]

                (log/debug "websocket: -> :%s" action)
                ;; trigger server events on local bus
                (bus/trigger (keyword action) params))))

    ;; better .send which converts clojure
    ;; data structures to JSON and serializes it
    (handle "send"
            (fn [{:keys [action] :as req}]
              (log/debug "websocket: <- %s" action)
              (->> (clj->js req)
                   (.stringify js/JSON)
                   send)))

    (handle "onclose"
            #(when (connected?)
               (reset! socket nil)
               (log/info "websocket: closed")
               (bus/trigger :socket-closed)))))

;; PUBLIC

(defn connected? []
  (not (nil? @socket)))

(defn send [action params]
  (let [s @socket
        req {:action action
             :params params}]
    (if s
      (.send s req)
      (add-to-queue req))))

(defn connect! [addr interval]
  (log/info "websocket: server %s; autoreconnect: %s ms" addr interval)
  (socket-connect addr)

  ;; auto reconnect
  (js/setInterval #(when-not (connected?)
                     (log/warn "websocket: not connected, reconnecting...")
                     (socket-connect addr)) interval))
