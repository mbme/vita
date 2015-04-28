(ns vita.dev
  (:require
   [vita] ;; load main app
   [viter]
   [core.state :as state]

   [figwheel.client :as fw :include-macros true]))

(set! viter/*force-render* true)

;; code auto reload
(fw/start
 {:websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback state/trigger-update!})
