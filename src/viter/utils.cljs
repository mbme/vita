(ns viter.utils
  (:require [clojure.string  :as  str]
            [com.facebook.React]))

(defn get-words [s]
  (str/split s #"\s+"))

(defn join [col]
  (str/join " " col))

(defn empty-val? [v]
  (or (nil? v) (str/blank? v)))

(defn echo [v] (println v) v)

(defn remove-empty-vals [m]
  (into {} (remove (comp empty-val? val) m)))

(def request-animation-frame (or (.-requestAnimationFrame js/window)
                                 (.-mozRequestAnimationFrame js/window)
                                 (.-webkitRequestAnimationFrame js/window)
                                 (.-msRequestAnimationFrame js/window)
                                 (fn [f] (.setTimeout js/window f 16))))

(def React js/React)

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
