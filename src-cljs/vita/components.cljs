(ns vita.components
  (:require [viter.core :as r :refer-macros [defc]]
            [viter.utils :as utils]))

(defn- add-prefix [classes]
  (map #(if (= \- (first %)) (str "fa" %) %) classes))

(defc icon [{:keys [class] :as all}]
  [:i.fa (assoc all :class (->> class
                                utils/get-words
                                add-prefix
                                utils/join))])
