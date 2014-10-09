(defproject vita "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]
                 [com.taoensso/timbre "3.2.1"]

                 [org.clojure/clojurescript "0.0-2322"]
                 [figwheel "0.1.4-SNAPSHOT"]]
  :plugins [[lein-ring "0.8.11"]]

  :hooks [leiningen.cljsbuild]

  :source-paths ["src" "src-cljs"]

  :ring {
         :handler vita.handler/app
         :port 8080}

  :cljsbuild {
              :builds [{
                        :id "dev"
                        :source-paths ["src-cljs/" "src-cljs-dev/"]
                        :compiler {
                                   :output-to "resources/public/app.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}}]}
  :figwheel {
             :server-port 8080
             :css-dirs ["resources/public/css"]
             :ring-handler vita.handler/app}

  :profiles {
             :dev {
                   :plugins [[lein-cljsbuild "1.0.3"]
                             [lein-figwheel "0.1.4-SNAPSHOT"]]
                   :dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}}
  )
