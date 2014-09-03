(ns vita.record
  ( :require [vita.config :as cfg]
             [clojure.java.io :as io] ))

(defrecord Record [name data])

(defn rec-new
  ([name data] (->Record name data))
  ([name] (rec-new name nil)))

;; TODO remove trailing dots
(defn rec-file-name [rec]
  (str (:name rec) ".md"))

(defn rec-file [rec]
  (io/file cfg/base-dir (rec-file-name rec)))

(defn rec-file-path [rec]
  (.getPath (rec-file rec)))

(defn rec-exists? [rec]
  (let [file (rec-file rec)]
    (and
     (.exists file)
     (.isFile file))
    ))

(defn write! [rec]
  (spit (rec-file-path rec) (:data rec)))

(defn read! [rec]
  (if (rec-exists? rec)
    (rec-new
     (:name rec)
     (slurp (rec-file-path rec)))
    ))

(defn delete! [rec]
  (.delete (rec-file rec)))
