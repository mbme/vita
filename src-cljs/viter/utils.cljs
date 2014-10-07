(ns viter.utils
  (:require [clojure.string  :as  str]))

(defn get-words [s]
  (str/split s #"\s+"))

(defn join [col]
  (str/join " " col))

(defn empty-val? [v]
  (or (nil? v) (str/blank? v)))

(defn echo [v] (println v) v)

(defn remove-empty-vals [m]
  (into {} (remove (comp empty-val? val) m)))
