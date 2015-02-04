(ns vita.utils.utils
  (:require [org.markdownIt]))

;; TO MARKDOWN
(def ^:private markdownIt
  (js/markdownit
   "default"
   #js {:html true
        :linkify true
        :typographer true}))

(defn md->html [md]
  (.render markdownIt md))
