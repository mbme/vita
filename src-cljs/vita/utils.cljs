(ns vita.utils
  (:require [com.remarkable]))

;; TO MARKDOWN
(def ^:private Remarkable (new js/Remarkable "full" #js {:html true
                                                         :linkify true
                                                         :typographer true}))
(defn md->html [md]
  (.render Remarkable md))
