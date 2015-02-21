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


;; DOM

(defn query [css-query]
  (.querySelector js/document css-query))

(defn query-all [css-query]
  (.querySelectorAll js/document css-query))

(defn get-bound-fn [obj prop]
  (.bind (aget obj prop) obj))

(defn classList [elem fn-name classes]
  (apply
   (get-bound-fn (.-classList elem) fn-name)
   (if (seq? classes) classes [classes])))

(defn add-class [elem & classes]
  (classList elem "add" classes))

(defn remove-class [elem & classes]
  (classList elem "remove" classes))

(defn ev-handle-from
  "Simple event delegation by class."
  [evt class handler]
  (when (classList (.-target evt) "contains" class)
    (handler evt)))

(defn ev-handlers-for [& mappings]
  (let [mapping (apply hash-map mappings)]
    (fn [evt]
      (doseq [[class handler] mapping]
        (ev-handle-from evt class handler)))))
