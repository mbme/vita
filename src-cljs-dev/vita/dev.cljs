(ns vita.dev
  (:require [figwheel.client :as fw :include-macros true]
            [weasel.repl :as weasel]))

(fw/watch-and-reload
 :jsload-callback (fn [] (println "app reloaded"))) ;; optional callback

(when-not (= (.indexOf js/window.location.href "REPL") -1)
  (weasel/connect "ws://localhost:9001" :verbose true :print #{:repl :console}))
