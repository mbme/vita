(ns vita.handler
  (:require
   [org.httpkit.server :refer [run-server]]
   [ring.util.response :refer [file-response]]

   [compojure.core :refer [defroutes GET]]
   [compojure.handler :refer [site]]
   [compojure.route :refer [files not-found]]))

;; (defn ws-handler [req]
;;   (with-channel req channel))


(defroutes app-routes
  ;; (GET "/ws" [] ws-handler)
  (files "" {:root "resources/public"})
  (not-found "NOT FOUND"))

(defn -main [& args]
  (run-server (site app-routes) {:port 8080})
  (println "DONE"))
