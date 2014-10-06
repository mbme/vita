(ns viter.utils
  (:require [clojure.string  :as  str]))

(defn get-words [s]
  (str/split s #"\s+"))

(defn join [col]
  (str/join " " col))
