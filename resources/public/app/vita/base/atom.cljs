(ns vita.base.atom)

(defn str->keyword [str]
  (keyword (.substring str 1)))

(defn keyword->str [k]
  (str ":" k))

(defprotocol InfoAtom
  (id [this]))

(defrecord AtomId [type name]
  Object
  (equals [_ r] (and (= type (:type r))
                     (= name (:name r))))
  (toString [_] (str (keyword->str type) "/" name)))

(defrecord VitaAtom [type name data]
  InfoAtom
  (id [this] (->AtomId type @name))
  Object
  (toString [this] (str (id this))))

(defn read-id [{:keys [type name]}]
  (->AtomId type name))

(defn read [{:keys [type name data]}]
  (->VitaAtom type (atom name) (atom data)))
