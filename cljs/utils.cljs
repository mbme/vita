(ns utils
  (:require [org.markdownIt]
            [com.momentJs]

            [goog.string :as gstr]
            [goog.string.format]

            [goog.style :as style]
            [goog.dom :as dom]
            [goog.events.EventType :as EventType]

            [viter.parser :refer [parse-tag-line]]
            [viter :refer [request-animation-frame]]
            [clojure.string :as str])
  (:require-macros [utils :as u]))

;; HELPERS

(defn get-bound-fn [obj prop]
  (.bind (aget obj prop) obj))

(def B-in-KB 1024)
(def B-in-MB (* B-in-KB 1024))
(def B-in-GB (* B-in-MB 1024))
(def B-in-PB (* B-in-GB 1024))

(defn format-bytes-size
  "Pretty print sizes in bytes."
  [bytes-size]
  (condp > bytes-size
    B-in-KB (str bytes-size "B")
    B-in-MB (gstr/format "%.2fKB" (/ bytes-size B-in-KB))
    B-in-GB (gstr/format "%.2fMB" (/ bytes-size B-in-MB))
    B-in-PB (gstr/format "%.2fGB" (/ bytes-size B-in-GB))
    (str bytes-size "B")))


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

(defn q1
  ([css-query]
   (q1 js/document css-query))
  ([el css-query]
   (.querySelector el css-query)))

(defn q
  ([css-query] (q js/document css-query))
  ([el css-query]
   (.querySelectorAll el css-query)))

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

(defn moment-unix [millis]
  (js/moment.unix millis))

(defn moment-calendar [millis]
  (.calendar (moment-unix millis)))

(defn moment-format [millis]
  (.format (moment-unix millis) "DD.MM.YYYY HH:mm"))

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

(defn watch-animation
  "Listen for animation events on `elem' and
  add `class' when animation ended."
  [elem class]
  (u/subscribe elem :animation-start #(remove-class elem class))
  (u/subscribe elem :animation-end   #(add-class    elem class)))

(defn after-animation [elem cb]
  (declare onend)
  (let [onend #(when (= elem (.-target %))
                 (u/unsubscribe elem :animation-end  onend)
                 (u/unsubscribe elem :transition-end onend)
                 (cb))]
    (u/subscribe elem :animation-end onend)
    (u/subscribe elem :transition-end onend)))

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

(defn animate! [el class]
  (let [active-class (str class "-active")
        cleanup #(remove-class el class active-class)]

    ;; remove current animation if there is one in progress
    (cleanup)

    ;; remove classes after animation
    (after-animation el cleanup)

    (request-animation-frame
     (fn []
       (add-class el class)
       (request-animation-frame
        #(add-class el active-class))))))
