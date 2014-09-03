(ns vita.storage
  ( :require [vita.config :as cfg]
             [vita.record :refer :all]
             [clojure.java.io :as io] ))

(defn- init-dir [base-dir]
  (if-not (.mkdir base-dir)
    (throw (RuntimeException. (str "can't create base dir " base-dir)))
    ))

(def base-dir (io/file cfg/base-dir))

;; init base dir if not exist
(if-not (.exists base-dir) (init-dir base-dir))

(defn rec-create! [name data]
  (let [rec (rec-new name data)]
    (if (rec-exists? rec)
      "record_exists"
      (do
        (write! rec)
        rec))
    ))

(defn rec-read! [name]
  (let [rec (read! (rec-new name))]
    (if (nil? rec)
      "record_not_exists"
      rec)
    ))

(defn rec-update! [name data]
  (let [rec (rec-new name data)]
    (if (rec-exists? rec)
      (do (write! rec) rec)
      "record_not_exists")
    ))

(defn rec-delete! [name]
  (let [rec (rec-new name)]
    (if (rec-exists? rec)
      (delete! rec)
      "record_not_exists")
    ))
