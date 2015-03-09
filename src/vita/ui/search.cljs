(ns vita.ui.search
  (:require
   [viter :as v]
   [vita.base.bus :refer [trigger]]
   [vita.ui.components :refer [icon category]]
   [vita.utils.utils :as utils]))

(v/defc SearchResult [{:keys [atom open]}]
  [:li.&
   {:class [(if (:visible atom)
              "&--visible"
              "&--hidden")
            (when open "&--open")]

    :onClick #(trigger :ws-open (:key atom))}

   [icon :type (:type atom) :class "&-icon"]

   [:time.&-time {:dateTime (:ts-updated atom)}
    (utils/calendar-moment (:ts-updated atom))]

   [:span.&-name (:name atom)]

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
      :placeholder "Filter atoms"
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
     (str
      (count (filter :visible atoms))
      " of "
      (count atoms)
      " atoms visible")]]

   (let [open-ids (set (map :id ws-items))]
     [:div.&-results
      [:ul (map #(SearchResult
                  :key (:key %)
                  :atom %
                  :open (contains? open-ids (:id %)))
                atoms)]])]

  :did-update
  (fn []
    (let [items (utils/q ".SearchPanel-results .SearchResult")

          visible (filter
                   #(utils/has-class % "SearchResult--visible")
                   items)]

      ;; remove first and last classes from outdated elements
      (doseq [item items]
        (utils/remove-class item "first" "last"))

      (utils/add-class (first visible) "first")
      (utils/add-class (last visible)  "last"))))
