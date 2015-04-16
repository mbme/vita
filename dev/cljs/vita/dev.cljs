(ns vita.dev
  (:require
   [vita.app] ;; load main app
   [vita.base.state :as state]
   [vita.ui.modal :as modal]
   [viter]
   [figwheel.client :as fw :include-macros true]))

(set! viter/*force-render* true)

;; code auto reload
(fw/start
 {:websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback #(do (modal/clear!)
                        (state/trigger-update!))})
