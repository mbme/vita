(defproject vita "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [
                 [org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]
                 [com.taoensso/timbre "3.2.1"]
                 ]
  :plugins [[lein-ring "0.8.11"]]
  :ring {
         :handler vita.handler/app
         :port 8080
         }
  :profiles
  {:dev {:dependencies [
                        [javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]
                        ]
         }})
