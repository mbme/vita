(ns vita.components
  (:require [viter.core :as r :refer-macros [defc]]
            [viter.utils :as utils]))

(defn- add-prefix [classes]
  (map #(str "fa-" %) classes))

(defc icon [{:keys [className]}]
  [:i.icon.fa {:class (->> className
                           utils/get-words
                           add-prefix
                           utils/join)}])
