(ns vita.base.socket
  (:require [vita.base.bus :as bus]
            [vita.utils.log :as log]

            [cljs.core.async :refer [chan put! close!]]))

(defonce ^:private socket (atom nil))

(defonce ^:private requests (volatile! {}))

;; QUEUE
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
              (let [{:strs [id
                            error
                            result]} (->> (.-data evt)
                                          (.parse js/JSON)
                                          js->clj)
                            result-chan (get @requests id)]

                (log/debug "websocket: -> %s %s" id
                           (if error (str "error: " error) "ok"))
                (put! result-chan [result error])
                (close! result-chan)
                (vswap! requests dissoc id))))

    ;; better .send which converts clojure
    ;; data structures to JSON and serializes it
    (handle "send"
            (fn [{:keys [id method] :as req}]
              (log/debug "websocket: <- %s %s" id method)
              (->> (clj->js req)
                   (.stringify js/JSON)
                   send)))

    (handle "onclose"
            #(when (connected?)
               (reset! socket nil)
               (log/info "websocket: closed")
               (bus/trigger :socket-closed)))))


;; Request id generator
(let [last-id (volatile! 0)]
  (defn- next-id []
    (vswap! last-id inc)))

(defn- send [method params]
  (let [s @socket
        id (next-id)
        req {:method method
             :params params
             :id id}
        result-chan (chan)]

    (vswap! requests assoc id result-chan)

    (if s
      (.send s req)
      (add-to-queue req))

    result-chan))

;; PUBLIC

(defn connected? []
  (not (nil? @socket)))

(defn read-atoms-list []
  (send :atoms-list-read nil))

(defn read-atom [id]
  (send :atom-read id))

(defn update-atom [data]
  (send :atom-update data))

(defn delete-atom [id]
  (send :atom-delete id))

(defn connect! [addr interval]
  (log/info "websocket: server %s; autoreconnect: %s ms" addr interval)
  (socket-connect addr)

  ;; auto reconnect
  (js/setInterval
   #(when-not (connected?)
      (log/warn "websocket: not connected, reconnecting...")
      (socket-connect addr))
   interval))
