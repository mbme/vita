(ns vita.ui.search
  (:require
   [viter.react :refer [e-val]]
   [viter.core :refer-macros [defc]]

   [vita.ui.workspace]

   [vita.base.bus :refer [trigger]]))

(defn- has-term? [atom term]
  (if (pos? (count term))
    (-> (:name atom)
        (.toLowerCase)
        (.indexOf (.toLowerCase term))
        (> -1))
    true))

(defn- sort-results [results]
  (sort
   (fn [res1 res2]
     (compare
      (:name (:atom res1))
      (:name (:atom res2))))
   results))

(defc SearchResult [{:keys [atom key visible]}]
  [:li {:onClick #(trigger :ws-open key)
        :class (when visible "&-visible")}
   (:name atom)])

(defc SearchPanel [{:keys [search-term atoms ws-items]}]
  [:div
   [:div.&-search
    [:icon  {:types "search"}]
    [:input {:type "text"
             :defaultValue search-term
             :onChange #(trigger :search-update (e-val %))}]]

   [:ul
    (->> atoms
         (map (fn [[key atom]]
                {:key key
                 :atom atom
                 :visible (has-term? atom search-term)}))
         sort-results
         (map SearchResult))]])
