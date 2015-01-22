(ns vita.handler
  (:require [vita.context :as ctx]
            [vita.storage :as storage]
            [taoensso.timbre :as timbre]
            [vita.generator :as gen]

            [cheshire.core :refer [generate-string parse-string]]

            [org.httpkit.server :refer :all]
            [ring.util.response :refer [file-response]]

            [ring.middleware.reload :refer [wrap-reload]]

            [compojure.core :refer [defroutes GET]]
            [compojure.handler :refer [site]]
            [compojure.route :refer [files not-found]]))

(timbre/refer-timbre)

(defn new-event [action params]
  {:action action :params params})

(defn read-id [{:keys [type name]}]
  (storage/atom-id (keyword type) name))

;; INITIALIZATION
(defonce _ (do
             (ctx/setup-logger!)
             (storage/init!)
             (gen/init-data!)))

(defn action-handler [{:keys [action params] :as data}]
  (debug "request payload:" data)
  (case (keyword action)
    :req-atoms-list (new-event :atoms-list (storage/atoms))
    :req-atom (new-event :atom
                         (storage/atom-read (read-id params)))
    (error "unexpected action:" action)))

(def counter (atom 0))
(defn ws-handler [req]
  (let [id (swap! counter inc)]
    (with-channel req channel
      (info "client" id "connected")
      ;; close handler
      (on-close channel
                (fn [status] (info "client" id "disconnected; status" status)))
      ;; message handler
      (on-receive channel
                  (fn [data]
                    (when-let [response (action-handler (parse-string data true))]
                      (send! channel (generate-string response))))))))

(defroutes app-routes
  (GET "/ws" [] ws-handler)
  (files "" {:root "resources/public"})
  (not-found "NOT FOUND"))

;; live reload wrapper for code
(def dev-app-routes (wrap-reload (site app-routes)))

(defn -main [& args]
  (run-server (site app-routes) {:port (:port ctx/config)})
  (info "UP AND RUNNING ON PORT" (:port ctx/config)))
