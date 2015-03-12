(ns vita.utils.utils
  (:require [org.markdownIt]
            [com.momentJs]

            [goog.string :as gstr]
            [goog.style :as style]
            [goog.dom :as dom]
            [goog.events.EventType :as EventType]

            [viter.parser :refer [parse-tag-line]]
            [clojure.string :as str])
  (:import goog.fx.dom.Scroll))

;; HELPERS

(defn get-bound-fn [obj prop]
  (.bind (aget obj prop) obj))


;; CLASS MANAGEMENT

(defn classList [elem fn-name classes]
  (when-not (nil? elem)
    (apply
     (get-bound-fn (.-classList elem) fn-name)
     (if (seq? classes) classes [classes]))))

(defn add-class [elem & classes]
  (classList elem "add" classes))

(defn remove-class [elem & classes]
  (classList elem "remove" classes))

(defn has-class [elem class]
  (classList elem "contains" class))


;; DOM utils

;; make it possible to iterate node list (result of querySelectorAll)
(extend-type js/NodeList
  ISeqable
  (-seq [array] (array-seq array 0)))

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
       (= (str/lower-case elem)
          (str/lower-case (.-tagName dom-elem)))
       true)

     ;; validate classes
     (every? true?
             (map #(has-class dom-elem %) classes)))))

(defn q1 [css-query]
  (.querySelector js/document css-query))

(defn q [css-query]
  (.querySelectorAll js/document css-query))

(defn q-parents [el pattern]
  (dom/getAncestor el #(is-elem % pattern)))


;; TO MARKDOWN

(when (nil? js/markdownit)
  (throw "can't find markdownIt library"))

(def ^:private markdownIt
  (js/markdownit
   "default"
   #js {:html true
        :linkify true
        :typographer true}))

(defn md->html [md]
  (.render markdownIt md))

;; MOMENT.JS

(when (nil? js/moment)
  (throw "can't find moment.js library"))

(def ^:private moment-locale
  #js {:lastDay  "[yesterday at] LT"
       :sameDay  "LT"
       :nextDay  "[tomorrow at] LT"
       :lastWeek  "[last] dddd [at] LT"
       :nextWeek  "dddd [at] LT"
       :sameElse  "L"})

(js/moment.locale "en" (js-obj "calendar" moment-locale))

(defn unix-moment [seconds]
  (js/moment.unix seconds))

(defn calendar-moment [seconds]
  (.calendar (unix-moment seconds)))

;; UI utils

(defn autosize! [elem]
  (style/setHeight elem 10)
  (let [current (.-clientHeight elem)
        total   (.-scrollHeight elem)]
    (style/setHeight elem total)))

(defn focus-input! [input]
  (let [len (aget input "value" "length")]
    (aset input "selectionStart" len)
    (aset input "selectionEnd" len)
    (.focus input)))

(defn scroll-to! [el container time accel]
  (let [old-x (.-scrollTop container)
        new-x (->
               (style/getContainerOffsetToScrollInto el container)
               (.-y)
               (- 10))]
    (.play (new Scroll container
                (array 0 old-x)
                (array 0 new-x)
                time accel))))

;; EVENT utils

(defn delegate
  "Simple event delegation.
  Accepts pairs of element tag line : event handler."
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

(defn subscribe
  "Subscribe to element's event."
  [elem event handler]
  (.addEventListener elem event handler false))

(defn watch-animation
  "Listen for animation events on `elem' and
  add `class' when animation ended."
  [elem class]
  (subscribe elem EventType/ANIMATIONSTART #(remove-class elem class))
  (subscribe elem EventType/ANIMATIONEND   #(add-class    elem class)))
