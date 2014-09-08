(ns vita.app
  (:require [reagent.core :as reagent :refer [atom]]
            [vita.log :as log]
            [figwheel.client :as fw :include-macros true]))

(fw/watch-and-reload
  ;; :websocket-url "ws://localhost:3449/figwheel-ws" default
  :jsload-callback (fn [] (log/warn "app reloaded"))) ;; optional callback

(def root (.getElementById js/document "main"))

(log/info "test! %s %s" 23 24)
(reagent/render-component [:h1 "HELLO MBME!"] root)
