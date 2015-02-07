(ns vita.ui.search
  (:require
   [viter.react :refer [e-val]]
   [viter.core :refer-macros [defc]]

   [vita.base.bus :refer [trigger]]))

(defn- has-term? [atom term]
  (if (pos? (count term))
    (-> (:name atom)
        (.toLowerCase)
        (.indexOf (.toLowerCase term))
        (> -1))
    true))

(defc SearchResult [{:keys [atom key visible]}]
  [:li {:onClick #(trigger :ws-open key)
        :class (when visible "&-visible")}
   (:name atom)])

(defc SearchPanel [{:keys [search-term atoms ws-items]}]
  [:div
   [:input.&-search {:type "text"
                     :placeholder "SEARCH"
                     :defaultValue search-term
                     :onChange #(trigger :search-update (e-val %))}]
   [:ul
    (map (fn [[key atom]]
           (SearchResult
            {:key key
             :atom atom
             :visible (has-term? atom search-term)}))
         atoms)]])
