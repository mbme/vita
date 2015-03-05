(ns vita.ui.search
  (:require
   [viter :as v]
   [vita.base.bus :refer [trigger]]
   [vita.ui.components :refer [icon]]
   [vita.utils.utils :as utils]))

(v/defc category [{:keys [key]}]
  [:span.& [icon :type :tag :class "&-icon"] key])

(v/defc SearchResult [{:keys [atom open]}]
  [:li.&
   {:class [(if (:visible atom)
              "&--visible"
              "&--hidden")
            (when open "&--open")]}

   [icon :type (:type atom) :class "&-icon"]
   [:span.&-name
    {:onClick #(trigger :ws-open (:key atom))}
    (:name atom)]

   [:div.&-categories
    (map #(category :key %) (:categories atom))]]

  :did-mount #(utils/watch-animation
               (v/get-node %) "done"))

(v/defc SearchPanel [{:keys [search-term atoms ws-items]} this]
  [:aside.&
   [:div.&-search {:ref "search"}
    [icon :type :search]
    [:input
     {:type "search"
      :placeholder "SEARCH"
      :defaultValue search-term
      :onChange #(trigger :search-update (v/e-val %))
      :onFocus #(->
                 (v/get-ref this "search")
                 v/get-node
                 (utils/add-class "focused"))
      :onBlur #(->
                (v/get-ref this "search")
                v/get-node
                (utils/remove-class "focused"))}]

    [:div.stats
     (str (count (filter :visible atoms))
          " of " (count atoms) " atoms")]]

   (let [open-ids (set (map :id ws-items))]
     [:div.&-results
      [:ul (map #(SearchResult
                  :key (:key %)
                  :atom %
                  :open (contains? open-ids (:id %)))
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
