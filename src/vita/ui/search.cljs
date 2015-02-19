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

(v/defc SearchResult [{:keys [atom key visible]}]
  [:li.&
   {:onClick #(trigger :ws-open key)
    :class (when visible "&-visible")}
   (:name atom)])

(v/defc SearchPanel [{:keys [search-term atoms ws-items]}]
  [:aside.&
   [:div.&-search
    [:input {:type "search"
             :defaultValue search-term
             :onChange #(trigger :search-update (v/e-val %))}]]

   `[:ul
     ~@(map (fn [[key atom]]
              [SearchResult
               :key key
               :atom atom
               :visible (has-term? atom search-term) ])
            atoms)]])
