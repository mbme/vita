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

(defn autosize! [elem]
  (aset (.-style elem) "height" "auto")
  (when (< (.-clientHeight elem)
           (.-scrollHeight elem))
    (aset (.-style elem) "height" (str (.-scrollHeight elem) "px"))))

(defn focus-input! [input]
  (let [len (.-length (.-value input))]
    (aset input "selectionStart" len)
    (aset input "selectionEnd" len)
    (.focus input)))
