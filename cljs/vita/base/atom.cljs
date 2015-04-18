(ns vita.base.atom)

(defn str->keyword [str]
  (keyword (.substring str 1)))

(defn keyword->str [keyword]
  (str keyword))

;; Atom Info
(defrecord AtomInfo [id
                     type
                     name
                     categories
                     ts-created
                     ts-updated])

(defn json->info [{:strs [id
                          type
                          name
                          categories
                          ts_created
                          ts_updated]}]
  (->AtomInfo id
              (str->keyword type)
              name
              categories
              ts_created
              ts_updated))

;; Atom
(defrecord VitaAtom [id
                     type
                     name
                     data
                     categories
                     ts-created
                     ts-updated]
  Object
  (toString [this] (str id type "/" @name " " categories)))

(defn json->atom [{:strs [id
                          type
                          name
                          data
                          categories
                          ts_created
                          ts_updated]}]
  (->VitaAtom id
              (str->keyword type)
              name
              data
              categories
              ts_created
              ts_updated))

(defn atom->json [{:keys [id
                          type
                          name
                          data
                          categories]}]
  {"id"   id
   "type" (keyword->str type)
   "name" name
   "data" data
   "categories" categories})

(defn new-atom [type]
  (->VitaAtom nil
              type
              ""
              ""
              []
              nil
              nil))
