(def clojure       "1.7.0-alpha5")
(def clojurescript "0.0-3058")
(def core-async    "0.1.346.0-17112a-alpha")

(def figwheel  "0.2.3-SNAPSHOT")
(def cljsbuild "1.0.5")

(defn res
  ([]     (res ""))
  ([path] (str "static" path)))

(defn dist [path]
  (str "target" path))

(def foreign-libs
  [{:file     (res "/react/react.js")
    :file-min (res "/react/react.min.js")
    :provides ["com.facebook.React"]}

   {:file     (res "/moment/moment.js")
    :file-min (res "/moment/min/moment.min.js")
    :provides ["com.momentJs"]}

   {:file     (res "/markdown-it/dist/markdown-it.js")
    :file-min (res "/markdown-it/dist/markdown-it.min.js")
    :provides ["org.markdownIt"]}])

(defproject vita "0.1.0-SNAPSHOT"
  :description "Vita UI"

  :dependencies [[org.clojure/clojure ~clojure]
                 [org.clojure/clojurescript ~clojurescript
                  :scope "provided"]
                 [org.clojure/core.async ~core-async]]

  :exclusions [org.clojure/clojure
               org.clojure/clojurescript]

  :plugins [[lein-cljsbuild ~cljsbuild :exclusions [org.clojure/clojure]]]

  :cljsbuild {:builds
              [{:id "prod"
                :source-paths ["cljs/"]

                :compiler {:output-to ~(dist "/app.js")
                           :main "vita.app"

                           ;; :source-map "dist/app.js.map"
                           ;; :output-dir "dist/out"

                           :foreign-libs ~foreign-libs
                           :externs [~(res "/react/react.js")
                                     ~(res "/moment/moment.js")
                                     ~(res "/markdown-it/dist/markdown-it.js")]

                           :pretty-print false
                           :elide-asserts true
                           :optimizations :advanced
                           :closure-warnings {:externs-validation :off
                                              :non-standard-jsdoc :off}

                           :warnings {:single-segment-namespace false}
                           :language-in :ecmascript5
                           :language-out :ecmascript5}}]}


  :profiles {:develop
             {:dependencies [[figwheel ~figwheel]]
              :plugins [[lein-figwheel ~figwheel
                         :exclusions [org.apache.httpcomponents/httpcore
                                      org.codehaus.plexus/plexus-utils
                                      org.clojure/clojure]]]
              :cljsbuild
              {:builds [{:id "dev"
                         :source-paths ["cljs/" "dev/cljs/"]

                         :compiler {:output-to  ~(dist "/app.js")
                                    :output-dir ~(dist "/app")

                                    :main "vita.dev"
                                    :asset-path "/app"

                                    :foreign-libs ~foreign-libs
                                    :optimizations :none

                                    :warnings {:single-segment-namespace false}
                                    :language-in :ecmascript5
                                    :language-out :ecmascript5}}]}

              :figwheel {:server-port 8080
                         :http-server-root ""
                         :repl false
                         :server-logfile ".lein-figwheel-server.log"
                         :css-dirs [ "/styles" ]}}})
