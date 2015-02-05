(def clojure       "1.6.0")
(def clojurescript "0.0-2760")

(def figwheel      "0.2.2-SNAPSHOT")
(def cljsbuild     "1.0.4")
(def bower         "0.5.1")
(def ancient       "0.6.1")
(def cider         "0.9.0-SNAPSHOT")

(defn res
  ([]     (res ""))
  ([path] (str "resources/public" path)))

(defproject vita "0.1.0-SNAPSHOT"
  :description "Vita UI"

  :global-vars {*warn-on-reflection* true}

  :dependencies [[org.clojure/clojure ~clojure]
                 [org.clojure/clojurescript ~clojurescript
                  :scope "provided"]]

  :exclusions [org.clojure/clojure
               org.clojure/clojurescript]

  :plugins [[lein-cljsbuild ~cljsbuild :exclusions [org.clojure/clojure]]
            [lein-bower     ~bower     :exclusions [org.clojure/clojure]]
            [lein-ancient   ~ancient   :exclusions [org.clojure/clojure]]]

  :bower-dependencies  [[react         "*"]
                        [markdown-it   "*"]
                        [fontawesome   "*"]
                        [normalize.css "*"]
                        [bourbon       "*"]]
  :bower {:directory    ~(res)}

  :profiles {:dev
             {:dependencies [[figwheel ~figwheel]]
              :plugins [[cider/cider-nrepl ~cider :exclusions [org.clojure/clojure]]
                        [lein-figwheel ~figwheel
                         :exclusions [org.apache.httpcomponents/httpcore
                                      org.codehaus.plexus/plexus-utils
                                      org.clojure/clojure]]]}}

  :cljsbuild
  {:builds [{:id "dev"
             :source-paths ["src/" "src-dev/"]
             :compiler
             {:output-to  ~(res "/app.js")
              :output-dir ~(res "/app")
              :main "vita.dev"
              :asset-path "/app"
              :foreign-libs
              [{:file     ~(res "/react/react.js")
                :file-min ~(res "/react/react.min.js")
                :provides ["com.facebook.React"]}

               {:file     ~(res "/markdown-it/dist/markdown-it.js")
                :file-min ~(res "/markdown-it/dist/markdown-it.min.js")
                :provides ["org.markdownIt"]}]

              :optimizations :none
              :pretty-print true
              :source-map true}}]}

  :figwheel {:server-port 8080
             ;; :ring-handler vita.handler/dev-app-routes
             :server-logfile ".lein-figwheel-server.log"
             :css-dirs [ ~(res "/styles")]}

  :aliases {"update" ["do" "ancient" ["bower" "update"]]})
