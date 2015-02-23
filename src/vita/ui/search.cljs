(ns vita.ui.search
  (:require
   [viter :as v]
   [vita.base.bus :refer [trigger]]
   [vita.utils.utils :as utils]))

(v/defc SearchResult [{:keys [atom key visible]}]
  [:li.&
   {:onClick #(trigger :ws-open key)
    :class (if (:visible atom)
             "&--visible" "&--hidden")}
   (:name atom)]

  :did-mount
  (fn [this]
    (let [elem (v/get-node this)]
      (utils/on elem
                :animation-start #(utils/remove-class elem "done"))
      (utils/on elem
                :animation-end #(utils/add-class elem "done")))))

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
