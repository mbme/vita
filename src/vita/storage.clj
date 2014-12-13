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
  (toString [_] (str type "/" name)))

(defrecord Atom [type name data])

(defn new-atom
  ([id data] (new-atom (:type id) (:name id) data))
  ([type name data] (Atom. type name data)))

(defn atom-id
  "Creates atom id."
  ([type name] (AtomId. type name))
  ([^Atom atom] (atom-id (:type atom) (:name atom))))

(defn atom-file
  "Get atom file by it's id."
  [{:keys [type name]}]
  (file base type (str name ".vita")))

(defn atom-exists?
  "Checks if atom with `id' already exists."
  [id]
  (.isFile (atom-file id)))

(defn file-write
  "Write `data' to the `file' handling all exceptions.
  Returns true on success, false otherwise."
  [file data]
  (try
    (spit file data)
    true
    (catch Exception e
      (errorf e "file %s write failed" file)
      false)))

(defn file-read
  "Read `file' handling all exceptions.
  Returns string data if success, nil otherwise."
  [file]
  (try
    (slurp file)
    (catch Exception e
      (errorf e "file %s read failed" file))))

(defn atom-create
  "Creates new `atom'.
  Returns true if created new atom, false if
  atom already exists or failed to write data."
  [^Atom atom]
  (let [id   (atom-id atom)
        file (atom-file id)]
    (infof "atom %s: creating" id)
    (if (.createNewFile file)
      (file-write file (:data atom))
      (do (errorf "file %s already exists" file) false))))

(defn atom-read
  "Returns atom with specified `id' or nil."
  [^AtomId id]
  (infof "atom %s: reading" id)
  (if (atom-exists? id)
    (when-let [data (file-read (atom-file id))]
      (new-atom id (slurp (atom-file id))))
    (errorf "atom %s: can't read - not found" id)))
