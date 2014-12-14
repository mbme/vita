(ns vita.handler
  (:require [vita.context :as ctx]
            [vita.storage :as storage]
            [taoensso.timbre :as timbre]

            [org.httpkit.server :refer [run-server]]
            [ring.util.response :refer [file-response]]

            [compojure.core :refer [defroutes GET]]
            [compojure.handler :refer [site]]
            [compojure.route :refer [files not-found]]))

;; INITIALIZATION
(ctx/setup-logger!)
(storage/init!)

;; (defn ws-handler [req]
;;   (with-channel req channel))


(defroutes app-routes
  ;; (GET "/ws" [] ws-handler)
  (files "" {:root "resources/public"})
  (not-found "NOT FOUND"))

(defn -main [& args]
  (run-server (site app-routes) {:port (:port ctx/config)})
  (timbre/info "UP AND RUNNING ON PORT" (:port ctx/config)))
