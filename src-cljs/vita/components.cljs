(ns vita.components
  (:require [vita.react :as r :refer-macros [defc]]))

(defn- add-prefix [classes]
  (map #(str "fa-" %) classes))

(defn icon [& classes]
  [:i.icon.fa {:class (add-prefix classes)}])
