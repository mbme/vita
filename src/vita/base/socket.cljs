(ns vita.base.socket
  (:require [vita.base.bus :as bus]
            [vita.utils.log :as log]

            [cljs.core.async :refer
             [<! chan put! close! mix admix toggle]])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop]]))

(defonce ^:private req-queue (chan))
(defonce ^:private requests  (volatile! {}))

(defonce ^:private socket-chan (chan))
(defonce ^:private socket      (atom nil))
(defn- socket-connect [addr]
  (let [s         (new js/WebSocket addr)

        ;; we use this flag to ignore close/error
        ;; events for not connected sockets
        connected (atom false)]

    (aset s "onopen"  (fn [evt]
                        (reset! connected true)
                        (reset! socket s)
                        (put! socket-chan [:open evt])))

    (aset s "onclose" (fn [evt]
                        (when @connected
                          (reset! socket nil)
                          (put! socket-chan [:close evt]))))

    (aset s "onerror" (fn [evt]
                        (when @connected
                          (put! socket-chan [:error evt]))))

    (aset s "onmessage"
          #(put! socket-chan [:message
                              (->> (.-data %)
                                   (.parse js/JSON)
                                   js->clj)]))

    (aset s "sendData"
          #(->> (clj->js %)
                js/JSON.stringify
                (.send s)))))

(defonce _
  (let [sender-chan  (chan)
        sender-mixer (mix sender-chan)]

    (admix sender-mixer socket-chan)
    (admix sender-mixer req-queue)

    ;; do not process requests queue until websocket connected
    (toggle sender-mixer { req-queue {:pause true}})

    (go-loop []
      (let [[evt val] (<! sender-chan)]
        (case evt
          :open    (do
                     (log/info "websocket: open")

                     ;; start processing requests queue
                     (toggle sender-mixer { req-queue {:pause false}})

                     (bus/trigger :socket-open))

          :close   (do
                     (log/warn "websocket: closed")

                     ;; stop processing requets queue
                     (toggle sender-mixer { req-queue {:pause true}})

                     (bus/trigger :socket-closed))

          :message (let [{:strs [id error result]} val
                         result-chan (get @requests id)]
                     (log/debug "websocket: -> %s %s" id
                                (if error (str "error: " error) "ok"))
                     (put! result-chan [result error])
                     (close! result-chan)
                     (vswap! requests dissoc id))

          :send    (let [{:keys [id method]} val]
                     (log/debug "websocket: <- %s %s" id method)
                     (.sendData @socket val))

          :error   (do
                     (log/error "websocket: error %o" val)
                     (bus/trigger :socket-error))))
      (recur))))

;; Request id generator
(let [last-id (volatile! 0)]
  (defn- next-id []
    (vswap! last-id inc)))

(defn- send [method params]
  (let [id          (next-id)
        result-chan (chan)]

    (vswap! requests assoc id result-chan)
    (put! req-queue [:send {:method method
                            :params params
                            :id id}])

    result-chan))

;; PUBLIC

(defn connected? []
  (not (nil? @socket)))

(defn read-atoms-list []
  (send :atoms-list-read nil))

(defn create-atom [data]
  (send :atom-create data))

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
