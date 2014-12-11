(ns vita.storage
  ( :require [vita.config :as cfg]
             [taoensso.timbre :as timbre]
             [clojure.java.io :as io :refer [file]] ))

;; logging helpers
(timbre/refer-timbre)

(defn base-create
  "Create `base-dir' or throw error."
  [base-dir]
  (if (.mkdir base-dir)
    (info "created base dir " (str base-dir))
    (let [err (RuntimeException. (str "can't create base dir " base-dir))]
      (fatal err)
      (throw err))))

(def base (file cfg/base-dir))

(defn init!
  "Initialize storage."
  []
  (if-not (.exists base) (base-create base))
  (infof "base dir: %s" base))
(init!)

;; TODO CRUD

(defrecord AtomId [type name]
  Object
  (toString [this] (str type "/" name)))

(defn atom-id
  "Creates atom id."
  ([type name] (AtomId. type name))
  ([^Atom atom] (atom-id (:type atom) (:name atom))))

(defrecord Atom [type name data])

(defn atom-file
  "Get atom file by it's id."
  [{:keys [type name]}]
  (file base type (str name ".vita")))

(defn atom-exists?
  "Checks if atom with `id' already exists."
  [id]
  (.isFile (atom-file id)))

(defn atom-create
  "Creates new `atom'.
  Returns true if created new atom, false if
  atom already exists or failed to write data."
  [^Atom atom]
  (let [id   (atom-id atom)
        file (atom-file id)]
    (if (.createNewFile file)
      (try
        (spit file (:data atom))
        (infof "atom %s: created" id)
        true
        (catch Exception e
          (errorf e "atom %s: can't create" id)
          false))
      (do
        (errorf "atom %s: can't create - already exists" id)
        false))))
