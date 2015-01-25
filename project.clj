(defproject vita "0.1.0-SNAPSHOT"
  :description "Vita UI"
  :global-vars {*warn-on-reflection* true}

  :dependencies [[org.clojure/clojure "1.6.0"]

                 ;; server, routes
                 [http-kit "2.1.19"]
                 [compojure "1.3.1"
                  :exclusions [commons-codec]]
                 [ring/ring-core "1.3.2"
                  :exclusions [org.clojure/tools.reader]]

                 ;; serialization/deserialization
                 [cheshire "5.4.0"]

                 ;; logging
                 [com.taoensso/timbre "3.3.1"
                  :exclusions [org.clojure/tools.reader]]

                 ;; frontend
                 [org.clojure/clojurescript "0.0-2727"
                  :scope "provided"]]

  :profiles {:dev
             {:dependencies [[ring/ring-devel "1.3.2"]
                             [cider/cider-nrepl "0.8.2" :exclusions [org.clojure/java.classpath]]
                             [javax.servlet/servlet-api "2.5"]
                             [figwheel "0.2.2-SNAPSHOT"]]

              :plugins [[lein-cljsbuild "1.0.4"]
                        [lein-ancient  "0.6.1"          :exclusions [org.clojure/clojure]]
                        [lein-figwheel "0.2.2-SNAPSHOT" :exclusions [org.clojure/clojure]]]

              :repl-options {:init-ns vita.handler}}}

  ;; compile clojurescript while building app
  ;; :hooks [leiningen.cljsbuild]

  :source-paths ["src" "src-cljs"]
  :main vita.handler

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src-cljs/" "src-cljs-dev/"]
                        :compiler {:output-to "resources/public/app.js"
                                   :output-dir "resources/public/out"
                                   :main "vita.dev"
                                   :asset-path "/out"

                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}}]}

  :figwheel {:server-port 8080
             :ring-handler vita.handler/dev-app-routes
             :server-logfile ".lein-figwheel-server.log"
             :css-dirs ["resources/public/css"]})
