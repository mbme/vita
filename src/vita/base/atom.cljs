(ns vita.base.atom)

(defn str->keyword [str]
  (keyword (.substring str 1)))

(defn keyword->str [keyword]
  (str keyword))

;; Atom Info
(defrecord AtomInfo [id type name categories])

(defn json->info [{:strs [id type name categories]}]
  (->AtomInfo id (str->keyword type) name categories))

;; Atom
(defrecord VitaAtom [id type name data]
  Object
  (toString [this] (str id type "/" @name)))

(defn json->atom [{:strs [id type name data]}]
  (->VitaAtom id (str->keyword type) (atom name) (atom data)))

(defn atom->json [{:keys [id type name data]}]
  {"id" id "type" (keyword->str type) "name" @name "data" @data})

(defn new-atom [type]
  (->VitaAtom nil type (atom "") (atom "")))
