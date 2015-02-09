(ns vita.base.atom)

(defn str->keyword [str]
  (keyword (.substring str 1)))

;; Atom Info
(defrecord AtomInfo [id type name])

(defn json->info [{:strs [id type name]}]
  (->AtomInfo id (str->keyword type) name))

;; Atom
(defrecord VitaAtom [id type name data]
  Object
  (toString [this] (str type "/" id "[" @name "]")))

(defn json->atom [{:strs [id type name data]}]
  (->VitaAtom id (str->keyword type) (atom name) (atom data)))

(defn atom->json [{:keys [id type name data]}]
  {"id" id "type" type "name" @name "data" @data})
