(ns ui.search
  (:require
   [viter :as v :refer-macros [defc]]
   [core.bus :refer [trigger]]
   [ui.components :refer [icon category]]
   [utils]))

(defc SearchResult [{:keys [atom open first last]}]
  [:li.&
   {:class [(if (:visible atom) "&--visible" "&--hidden")
            (when open "&--open")
            (when first "first")
            (when last "last")]

    :onClick #(trigger :ws-open (:key atom))}

   [icon :type (:type atom) :class "&-icon"]

   [:time.&-time {:dateTime (:ts-updated atom)}
    (utils/calendar-moment (:ts-updated atom))]

   [:span.&-name (:name atom)]

   [:div.&-categories
    (map #(category :key %) (:categories atom))]]

  {:did-mount #(utils/watch-animation (v/node %) "done")})

(defc SearchPanel [{:keys [search-term atoms ws-items]}]
  (let [open-ids (set (map :id ws-items))
        visible-atoms (filter :visible atoms)
        first-visible (first visible-atoms)
        last-visible (last visible-atoms)]

    [:aside.&
     [:div.&-search
      [icon :type :search]
      [:input
       {:type "search"
        :placeholder "Filter atoms"
        :defaultValue search-term
        :onChange #(trigger :search-update (v/e-val %))
        :onFocus #(-> (.-target %)
                      (.-parentNode)
                      (utils/add-class "focused"))
        :onBlur #(-> (.-target %)
                     (.-parentNode)
                     (utils/remove-class "focused"))}]
      [:div.stats
       (str
        (count visible-atoms) " of " (count atoms) " atoms visible")]]

     [:div.&-results
      [:ul (map #(SearchResult
                  :key (:key %)
                  :atom %
                  :first (= % first-visible)
                  :last  (= % last-visible)
                  :open (contains? open-ids (:id %)))
                atoms)]]
     ]))
