(ns vita.utils.utils
  (:require [org.markdownIt]
            [viter.parser :refer [parse-tag-line]]
            [clojure.string :refer [lower-case]]))

(when (nil? js/markdownit) (throw "can't find markdownIt library"))

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

(defn has-class [elem class]
  (classList elem "contains" class))

(defn is-elem
  "Check if dom element corresponds to tag line."
  [dom-elem tag-line]
  (let [{:keys [id elem classes]}
        (parse-tag-line tag-line)]
    (and
     ;; validate id
     (if id   (= id (.-id dom-elem)) true)

     ;; validate elem name
     (if elem
       (= (lower-case elem)
          (lower-case (.-tagName dom-elem)))
       true)

     ;; validate classes
     (every? true?
             (map #(has-class dom-elem %) classes)))))

(defn ev-handlers
  "Simple event delegation."
  [& args]
  (fn [evt]
    (->>
     (partition 2 args)
     (map (fn [[tag-line handler]]
            (when (is-elem (.-target evt) tag-line)
              (handler evt)
              true)))
     (some true?))

    ;; need to return nil because returning
    ;; boolean value is deprecated in react
    nil))
