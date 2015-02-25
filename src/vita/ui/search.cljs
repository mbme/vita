(ns vita.ui.search
  (:require
   [viter :as v]
   [vita.base.bus :refer [trigger]]
   [vita.utils.utils :as utils]))

(v/defc SearchResult [{:keys [atom key visible]}]
  [:li.&
   {:onClick #(trigger :ws-open key)
    :class (if (:visible atom)
             "&--visible"
             "&--hidden")}
   (:name atom)]

  :did-mount #(utils/watch-animation (v/get-node %) "done"))

(v/defc SearchPanel [{:keys [search-term atoms ws-items]}]
  [:aside.&
   [:div.&-search
    [:input {:type "search"
             :placeholder "SEARCH"
             :defaultValue search-term
             :onChange #(trigger :search-update (v/e-val %))}]

    [:div.stats
     (str (count (filter :visible atoms))
          " of " (count atoms) " atoms, "
          (count ws-items) " selected")]]

   `[:ul.&-results
     ~@(map
        (fn [atom]
          [SearchResult :key (:key atom) :atom atom])
        atoms)]
   ])
