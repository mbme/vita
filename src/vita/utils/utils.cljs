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

(defn query [css-query]
  (.querySelector js/document css-query))

(defn query-all [css-query]
  (.querySelectorAll js/document css-query))
