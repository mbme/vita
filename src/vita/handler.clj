(ns vita.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [ring.util.response :as resp]
            [compojure.route :as route]))

(defroutes app-routes
  (GET "/" [] (resp/file-response "resources/public/index.html"))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))
