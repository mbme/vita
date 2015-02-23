(ns vita.ui.search
  (:require
   [viter :as v]
   [vita.base.bus :refer [trigger]]))

(v/defc SearchResult [{:keys [atom key visible]}]
  [:li.&
   {:onClick #(trigger :ws-open key)
    :class (when (:visible atom)
             "&-visible")}
   (:name atom)])

(v/defc SearchPanel [{:keys [search-term atoms ws-items]}]
  [:aside.&
   [:div.&-search
    [:input {:type "search"
             :defaultValue search-term
             :onChange #(trigger :search-update (v/e-val %))}]]

   `[:ul.&-results
     ~@(map
        (fn [atom]
          [SearchResult :key (:key atom) :atom atom])
        atoms)]

   (let [total    (count atoms)
         visible  (count (filter :visible atoms))
         selected (count ws-items)]
     [:div.&-stats
      (str visible " of " total " atoms, " selected " selected")])])
