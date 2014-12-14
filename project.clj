(defproject vita "0.1.0-SNAPSHOT"
  :description "Helper"
  :dependencies [[org.clojure/clojure "1.6.0"]

                 ;; server, routes
                 [http-kit "2.1.19"]
                 [compojure "1.3.1"]
                 [ring/ring-devel "1.3.2"]
                 [ring/ring-core "1.3.2"]

                 ;; serialization/deserialization
                 [cheshire "5.4.0"]

                 ;; logging
                 [com.taoensso/timbre "3.3.1"]

                 ;; frontend
                 [org.clojure/clojurescript "0.0-2411"  :scope "provided"]
                 [figwheel "0.1.7-SNAPSHOT"]]

  :profiles {:dev {:plugins [[lein-cljsbuild "1.0.3"]
                             [lein-figwheel "0.1.7-SNAPSHOT"]]
                   :dependencies [[javax.servlet/servlet-api "2.5"]]}}

  ;; compile clojurescript while building app
  :hooks [leiningen.cljsbuild]

  :source-paths ["src" "src-cljs"]
  :main vita.handler

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src-cljs/" "src-cljs-dev/"]
                        :compiler {:output-to "resources/public/app.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}}]}

  :figwheel {:server-port 8080
             :ring-handler vita.handler/dev-app-routes
             :css-dirs ["resources/public/css"]})
