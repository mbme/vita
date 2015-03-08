(def clojure       "1.6.0")
(def clojurescript "0.0-2913")
(def core-async    "0.1.346.0-17112a-alpha")

(def figwheel  "0.2.3-SNAPSHOT")
(def cljsbuild "1.0.4")
(def ancient   "0.6.1")
(def cider     "0.9.0-SNAPSHOT")

(defn res
  ([]     (res ""))
  ([path] (str "resources" path)))

(defproject vita "0.1.0-SNAPSHOT"
  :description "Vita UI"

  :global-vars {*warn-on-reflection* true}

  :dependencies [[org.clojure/clojure ~clojure]
                 [org.clojure/clojurescript ~clojurescript
                  :scope "provided"]
                 [org.clojure/core.async ~core-async]]

  :exclusions [org.clojure/clojure
               org.clojure/clojurescript]

  :plugins [[lein-cljsbuild ~cljsbuild :exclusions [org.clojure/clojure]]
            [lein-ancient   ~ancient   :exclusions [org.clojure/clojure]]]

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

               {:file     ~(res "/jquery/dist/jquery.js")
                :file-min ~(res "/jquery/dist/jquery.min.js")
                :provides ["com.JQuery"]}

               {:file     ~(res "/moment/moment.js")
                :file-min ~(res "/moment/min/moment.min.js")
                :provides ["com.momentJs"]}

               {:file     ~(res "/markdown-it/dist/markdown-it.js")
                :file-min ~(res "/markdown-it/dist/markdown-it.min.js")
                :provides ["org.markdownIt"]}]

              :optimizations :none
              :warnings {:single-segment-namespace false}
              :pretty-print true
              :source-map true}}]}

  :figwheel {:server-port 8080
             :http-server-root ""
             :repl false
             :server-logfile ".lein-figwheel-server.log"
             :css-dirs [ ~(res "/styles")]})
