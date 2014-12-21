(ns vita.storage
  (:require [vita.context :as ctx]
            [taoensso.timbre :as timbre]
            [clojure.java.io :as io :refer [file]]))

(timbre/refer-timbre)

(def file-ext ".vita")

(defn trim-ext [name]
  (.substring name 0 (.lastIndexOf name file-ext)))

(defn str->keyword [str]
  (keyword (.substring str 1)))

(defn base-create
  "Create `base-dir' or throw error."
  [base-dir]
  (if (.mkdir base-dir)
    (info "created base dir " (str base-dir))
    (let [err (RuntimeException. (str "can't create base dir " base-dir))]
      (fatal err)
      (throw err))))

(def base (atom nil))

(defn init! []
  (let [base-dir (file (:base-dir ctx/config))]
    (when-not (.exists base-dir) (base-create base-dir))
    (reset! base base-dir)
    (infof "base dir: %s" base-dir)))

(defrecord AtomId [type name]
  Object
  (toString [_] (str type "/" name)))

(defrecord Atom [type name data])

(defn atom-type? [type]
  (and (not (nil? type))
       (.startsWith type ":")))

(defn atom-file? [name]
  (and (not (nil? name))
       (.endsWith name file-ext)))

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
  (file @base (str type) (str name file-ext)))

(defn atom-exists?
  "Checks if atom with `id' already exists."
  [id]
  (.isFile (atom-file id)))

(defn type-create
  "Create new type."
  [type]
  (if (.mkdir (file @base (str type)))
    (do (info "created type" type) true)
    false))

(defn file-create
  "Creates new `file'.
  Returns true only if created
  new file, returns false if file already
  exists or some exception happened."
  [file]
  (try
    (if (.createNewFile file)
      true
      (do (errorf "can't create file %s: already exists" file) false))
    (catch Exception e
      (error e "can't create file" file) false)))

(defn file-write
  "Write `data' to the `file' handling all exceptions.
  Returns true on success, false otherwise."
  [file data]
  (try
    (spit file data) true
    (catch Exception e
      (error e "file" file "write failed") false)))

(defn file-read
  "Read `file' handling all exceptions.
  Returns string data if success, nil otherwise."
  [file]
  (try (slurp file)
       (catch Exception e
         (error e "file" file "read failed"))))

(defn file-delete
  "Delete `file'. Returns true only if
  file existed and successfully
  deleted, false otherwise."
  [file]
  (try
    (if (.delete file)
      true
      (do (error "can't delete file" file) false))
    (catch Exception e
      (error e "file" file "delete failed") false)))


(defn atom-create
  "Creates new `atom'.
  Returns true if created new atom, false if
  atom already exists or failed to write data."
  [^Atom atom]
  (let [id   (atom-id atom)
        file (atom-file id)]
    (infof "atom %s: creating" id)
    (when (file-create file)
      (file-write file (:data atom)))))

(defn atom-read
  "Returns atom with specified `id' or nil."
  [^AtomId id]
  (infof "atom %s: reading" id)
  (if (atom-exists? id)
    (when-let [data (file-read (atom-file id))]
      (new-atom id data))
    (errorf "atom %s: can't read - not found" id)))

(defn atom-update
  "Updates specified atom. Returns true if updated,
  false if atom doesn't exists or update failed."
  [^Atom atom]
  (let [id   (atom-id atom)
        file (atom-file id)]
    (infof "atom %s: updating" id)
    (if (atom-exists? id)
      (file-write file (:data atom))
      (do (errorf "atom %s: doesn't exists" id) false))))

(defn atom-delete
  "Removes atom with specified `id'.
  Returns true if success, false otherwise."
  [^AtomId id]
  (infof "atom %s: deleting" id)
  (if (atom-exists? id)
    (file-delete (atom-file id))
    (do (errorf "atom %s: can't delete - not found" id) false)))

(defn types
  "Get list of all atom types."
  [] (->> (.list @base)
          (filter atom-type?)
          (map str->keyword)))

(defn atoms
  "Get list of all atoms ids of `type'.
  Returns all atoms ids of all types if `type' not specified."
  ([type] (->> (str type)
               (file @base)
               (.list)
               (filter atom-file?)
               (map #(atom-id type (trim-ext %)))))
  ([] (flatten (map atoms (types)))))
