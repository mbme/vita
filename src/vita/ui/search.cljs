(ns vita.ui.search
  (:require
   [viter :as v]
   [vita.base.bus :refer [trigger]]
   [vita.ui.components :refer [icon]]
   [vita.utils.utils :as utils]))

(v/defc SearchResult [{:keys [atom open]}]
  [:li.&
   {:onClick #(trigger :ws-open (:key atom))
    :class {:&--visible (:visible atom)
            :&--hidden  (not (:visible atom))
            :&--open    open}}

   [icon :type (:type atom)]
   [:span.name (:name atom)]]

  :did-mount #(utils/watch-animation
               (v/get-node %) "done"))

(v/defc SearchPanel [{:keys [search-term atoms ws-items]}]
  [:aside.&
   [:div.&-search
    [icon :type :search]
    [:input {:type "search"
             :placeholder "SEARCH"
             :defaultValue search-term
             :onChange #(trigger :search-update (v/e-val %))}]

    [:div.stats
     (str (count (filter :visible atoms))
          " of " (count atoms) " atoms")]]

   (let [open-ids (set (map :id ws-items))]
     [:div.&-results
      [:ul (map (fn [atom]
                  [SearchResult
                   :key (:key atom)
                   :atom atom
                   :open (contains? open-ids (:id atom))])
                atoms)]])]

  :did-update
  (fn []
    (let [items (utils/query-all
                 ".SearchPanel-results .SearchResult")

          visible (filter
                   #(utils/has-class % "SearchResult--visible")
                   items)]

      ;; remove first and last classes from outdated elements
      (doseq [item items]
        (utils/remove-class item "first" "last"))

      (utils/add-class (first visible) "first")
      (utils/add-class (last visible)  "last"))))
