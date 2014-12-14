(ns vita.handler
  (:require [vita.context :as ctx]
            [vita.storage :as storage]
            [taoensso.timbre :as timbre]

            [cheshire.core :refer [generate-string parse-string]]

            [org.httpkit.server :refer :all]
            [ring.util.response :refer [file-response]]

            [compojure.core :refer [defroutes GET]]
            [compojure.handler :refer [site]]
            [compojure.route :refer [files not-found]]))

(timbre/refer-timbre)

;; INITIALIZATION
(ctx/setup-logger!)
(storage/init!)

(defn action-handler [{:keys [action params] :as data}]
  (info "action" action "params:" params)
  (debug "request payload:" data)
  data)

(def counter (atom 0))
(defn ws-handler [req]
  (let [id (swap! counter inc)]
    (with-channel req channel
      (info "client" id "connected")
      ;; close handler
      (on-close channel (fn [status] (info "client" id "disconnected; status" status)))
      ;; message handler
      (on-receive channel (fn [data]
                            (if-let [response (action-handler (parse-string data true))]
                              (send! channel (generate-string response))))))))

(defroutes app-routes
  (GET "/ws" [] ws-handler)
  (files "" {:root "resources/public"})
  (not-found "NOT FOUND"))

(defn -main [& args]
  (run-server (site app-routes) {:port (:port ctx/config)})
  (info "UP AND RUNNING ON PORT" (:port ctx/config)))
