(ns vita.routing
  (:require [vita.log :as log]
            [vita.state :as state]))

(defn configure! [conf]
  (log/debug "routing config: %s" conf)
  (js/page.base "/")
  (doseq [[route val] conf]
    (js/page route #(state/set-path! val (.-params %))))
  (js/page))
