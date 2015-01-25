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

  :exclusions [org.clojure/clojure
               org.clojure/clojurescript]

  :plugins [[lein-cljsbuild "1.0.4" :exclusions [org.clojure/clojure]]
            [lein-bower     "0.5.1" :exclusions [org.clojure/clojure]]
            [lein-ancient   "0.6.1" :exclusions [org.clojure/clojure]]]

  :bower-dependencies  [[react         "*"]
                        [jquery        "*"]
                        [markdown-it   "*"]
                        [fontawesome   "*"]
                        [normalize.css "*"]
                        [bourbon       "*"]]
  :bower {:directory    "resources/public"}

  :profiles {:dev
             {:dependencies [[ring/ring-devel "1.3.2"]
                             [cider/cider-nrepl "0.8.2"
                              :exclusions [org.clojure/java.classpath]]
                             [javax.servlet/servlet-api "2.5"]
                             [figwheel "0.2.2-SNAPSHOT"]]

              :plugins [[lein-figwheel "0.2.2-SNAPSHOT"
                         :exclusions [org.apache.httpcomponents/httpcore
                                      org.codehaus.plexus/plexus-utils
                                      org.clojure/clojure]]]}}

  :source-paths ["src" "src-cljs"]
  :main vita.handler

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src-cljs/"
                               "src-cljs-dev/"]
                :compiler
                {:output-to  "resources/public/app.js"
                 :output-dir "resources/public/app"
                 :main "vita.dev"
                 :asset-path "/app"
                 :foreign-libs
                 [{:file     "resources/public/react/react.js"
                   :file-min "resources/public/react/react.min.js"
                   :provides ["com.facebook.React"]}

                  {:file     "resources/public/jquery/dist/jquery.js"
                   :file-min "resources/public/jquery/dist/jquery.min.js"
                   :provides ["com.jQuery"]}

                  {:file     "resources/public/markdown-it/dist/markdown-it.js"
                   :file-min "resources/public/markdown-it/dist/markdown-it.min.js"
                   :provides ["org.markdownIt"]}]

                 :optimizations :none
                 :pretty-print true
                 :source-map true}}]}

  :figwheel {:server-port 8080
             :ring-handler vita.handler/dev-app-routes
             :server-logfile ".lein-figwheel-server.log"
             :css-dirs ["resources/public/css"]})
