(def clojure       "1.7.0-alpha6")
(def clojurescript "0.0-3208")
(def core-async    "0.1.346.0-17112a-alpha")

(def cljsbuild "1.0.5")

(defn res
  ([]     (res ""))
  ([path] (str "vendor" path)))

(defn dist-prod [path]
  (str "dist" path))

(defn dist-dev [path]
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

(defproject vita "X"
  :description "Vita UI"

  :dependencies [[org.clojure/clojure ~clojure]
                 [org.clojure/clojurescript ~clojurescript
                  :scope "provided"]
                 [org.clojure/core.async ~core-async]]

  :exclusions [org.clojure/clojure
               org.clojure/clojurescript]

  :plugins [[lein-cljsbuild ~cljsbuild :exclusions [org.clojure/clojure]]]


  :cljsbuild
  {:builds
   [{:id "prod"
     :source-paths ["cljs/"]
     :compiler {:output-to ~(dist-prod "/app.js")
                :main "vita"

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
                :language-out :ecmascript5}}

    {:id "dev"
     :source-paths ["cljs/"]
     :compiler {:output-to  ~(dist-dev "/app.js")
                :output-dir ~(dist-dev "/app")
                :main "vita"

                :asset-path ~(dist-dev "/app")

                :foreign-libs ~foreign-libs
                :optimizations :none

                :warnings {:single-segment-namespace false}
                :language-in :ecmascript5
                :language-out :ecmascript5}}]})
