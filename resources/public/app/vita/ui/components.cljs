(ns vita.ui.components
  (:require [viter.core :as r :refer-macros [defc]]
            [viter.utils :as utils]))

(defprotocol IconType
  (stringify [this]))

(extend-type string
  IconType
  (stringify [this] (str "fa-" this)))

(extend-type PersistentVector
  IconType
  (stringify [this] (utils/join (map stringify this))))

(defc icon [{:keys [class types] :as all}]
  (let [icon-class (stringify types)
        total-class (str class icon-class)]
    [:i.fa (assoc all :class total-class)]))
