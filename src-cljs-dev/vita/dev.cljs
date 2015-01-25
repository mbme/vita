(ns vita.dev
  (:require
   [vita.app] ;; load main app
   [figwheel.client :as fw :include-macros true]))

;; code auto reload
(fw/watch-and-reload)
