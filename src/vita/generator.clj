(ns vita.generator
  (:require [clojure.string :as str]
            [taoensso.timbre :as timbre]
            [vita.data :as data]
            [vita.storage :refer [atom-create new-atom type-create]]))

(def chars-list (map char (range 97 123)))
(defn random-char []
  (rand-nth chars-list))

(defn rand-in-range [min max]
  (-> (inc max)
    (- min)
    (rand-int)
    (+ min)))

(defn random-word
  ([min max](->> (repeatedly random-char)
              (take (rand-in-range min max))
              (apply str)))
  ([] (random-word 2 8)))

(defn random-name []
  (->> (repeatedly random-word)
    (take (rand-in-range 1 5))
    (str/join " ")))

(defn random-sentence []
  (->> (repeatedly random-word)
    (take (rand-in-range 2 12))
    (str/join " ")
    (#(str % "."))
    (str/capitalize)))

(defn random-paragraph []
  (->> (repeatedly random-sentence)
    (take (rand-in-range 1 5))
    (str/join " ")))

(defn random-data []
  (->> (repeatedly random-paragraph)
    (take (rand-in-range 2 5))
    (str/join "\n")))

(defn rec-create []
  {:name (random-name)
   :data (random-data)})

(defn random-records [count]
  (take count (repeatedly rec-create)))

;; load test data once
(defn init-data! []
  (type-create :record)
  (doseq [{:keys [name data]} data/datas ]
    (atom-create (new-atom :record name data)))
  (timbre/info "initialized test data"))
