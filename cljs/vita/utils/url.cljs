(ns vita.utils.url
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [clojure.string :as str])
  (:import goog.history.Html5History
           goog.history.Html5History.TokenTransformer))

(defn- create-transformer []
  "Transformer which replaces query string instead of appending it."
  (let [transformer (TokenTransformer.)]
    (set! (.. transformer -retrieveToken)
          (fn [path-prefix location]
            (str (.-pathname location) (.-search location))))
    (set! (.. transformer -createUrl)
          (fn [token path-prefix location]
            (str path-prefix token)))
    transformer))

(defn- triml-char [char str]
  (if (= (first str) char) (rest str) str))

(defn- cleanup-query [query]
  (->> query
       (triml-char \/)
       (triml-char \?)
       (apply str)))

(defn- decode-item [s]
  (js/decodeURIComponent (str/replace s #"\+" " ")))
(defn- parse-query [query]
  (into {}
        (for [[_ k v] (re-seq #"([^&=]+)=?([^&]*)" query)]
          [k (decode-item v)])))

(def ^:private history nil)

(defn watch! [on-change]
  (let [h (Html5History. js/window (create-transformer))]
    (goog.events/listen h EventType/NAVIGATE #(-> (.-token %)
                                                  cleanup-query
                                                  parse-query
                                                  on-change))
    (doto h (.setUseFragment false) (.setEnabled true))
    (set! history h)))

(defn set! [str]
  (.setToken history str))
