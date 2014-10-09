(ns vita.components
  (:require [viter.core :as r :refer-macros [defc]]
            [viter.utils :as utils]))

(defn- add-prefix [classes]
  (map #(str "fa-" %) classes))

(defc icon [{:keys [class]}]
  [:i.fa {:class (->> class
                      utils/get-words
                      add-prefix
                      utils/join)}])
