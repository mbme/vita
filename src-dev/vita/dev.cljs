(ns vita.dev
  (:require
   [vita.app] ;; load main app
   [vita.base.state :as state]
   [vita.ui.modal :as modal]
   [viter]
   [figwheel.client :as fw :include-macros true]))

(set! viter/*force-render* true)

;; code auto reload
(fw/watch-and-reload
 :jsload-callback #(do (js/console.warn "APP RELOADED")
                       (state/trigger-update!)
                       (modal/trigger-update!)))
