(ns vita.generator
  (:require [clojure.string :as str]
            [vita.state :as state]
            [vita.data :as data]))

(def chars-list (map char (range 97 123)))
(defn random-char []
  (rand-nth chars-list))

(defn rand-in-range [min max]
  (-> max
      (inc)
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
       (str/capitalize)
       ))

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
;; (defonce _ (state/load-records! (random-records 10)))
(defonce _ (do (state/load-records! data/datas)
               (state/ws-open-record 2)))
