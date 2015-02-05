(ns vita.ui.search
  (:require
   [viter.react :refer [e-val]]
   [viter.core :refer-macros [defc]]

   [vita.base.bus :refer [trigger]]))

(defn- has-term? [atom-id term]
  (if (pos? (count term))
    (-> (:name atom-id)
        (.toLowerCase)
        (.indexOf (.toLowerCase term))
        (> -1))
    true))

(defc SearchResult [{:keys [atom-id key visible]}]
  [:li {:onClick #(trigger :ws-open key)
        :class (when visible "&-visible")}
   (:name atom-id)])

(defc SearchPanel [{:keys [search-term atoms-list ws-items]}]
  [:div
   [:input.&-search {:type "text"
                     :placeholder "SEARCH"
                     :defaultValue search-term
                     :onChange #(trigger :search-update (e-val %))}]
   [:ul
    (map (fn [[key atom-id]]
           (SearchResult
            {:key key
             :atom-id atom-id
             :visible (has-term? atom-id search-term)}))
         atoms-list)]])
