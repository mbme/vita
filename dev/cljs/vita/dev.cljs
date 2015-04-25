(ns vita.dev
  (:require
   [vita] ;; load main app
   [core.state :as state]
   [ui.modal :as modal]
   [viter]
   [figwheel.client :as fw :include-macros true]))

(set! viter/*force-render* true)

;; code auto reload
(fw/start
 {:websocket-url   "ws://localhost:3449/figwheel-ws"
  :jsload-callback #(do (modal/clear!)
                        (state/trigger-update!))})
