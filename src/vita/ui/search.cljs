(ns vita.ui.search
  (:require
   [viter :as v]
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

(v/defc SearchResult [{:keys [atom key visible]}]
  [:li {:onClick #(trigger :ws-open key)
        :class (when visible "&-visible")}
   (:name atom)])

(v/defc SearchPanel [{:keys [search-term atoms ws-items]}]
  [:div
   [:div.&-search.input-field
    [:icon.prefix {:types "action-search"}]
    [:input {:type "text"
             :defaultValue search-term
             :onChange #(trigger :search-update (v/e-val %))}]]

   [:ul
    (->> atoms
         (map (fn [[key atom]]
                {:key key
                 :atom atom
                 :visible (has-term? atom search-term)}))
         sort-results
         (map SearchResult))]])
