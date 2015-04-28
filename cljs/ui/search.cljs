(ns ui.search
  (:require
   [viter :as v :refer-macros [defc]]
   [core.bus :refer [trigger]]
   [ui.components :refer [icon category]]
   [utils]))

(defc SearchResult [{:keys [atom open first last]}]
  [:li.&
   {:class [(if (:visible atom) "&--visible" "&--hidden")
            (when open "&--open")]

    :onClick #(trigger :ws-open (:key atom))}

   [icon :type (:type atom) :class "&-icon"]

   [:time.&-time {:dateTime (:ts-updated atom)}
    (utils/calendar-moment (:ts-updated atom))]

   [:span.&-name (:name atom)]

   [:div.&-categories
    (map #(category :key %) (:categories atom))]]

  {:did-mount #(utils/watch-animation (v/node %) "done")})

(defn- atom-has-term? [atom term]
  (if (pos? (count term))
    (-> (:name atom)
        (.toLowerCase)
        (.indexOf (.toLowerCase term))
        (> -1))
    true))

(defc SearchPanel [{:keys [atoms ws-items]} state]
  (let [search-term @state
        atoms (map #(assoc % :visible (atom-has-term? % search-term)) atoms)
        open-ids (set (map :id ws-items))
        visible-atoms (filter :visible atoms)]

    [:aside.&
     [:div.&-search
      [icon :type :search]
      [:input
       {:type "search"
        :placeholder "Filter atoms"
        :defaultValue search-term
        :onChange #(reset! state (v/e-val %))
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
                  :open (contains? open-ids (:id %)))
                atoms)]]
     ])

  (fn [this state] (reset! state "") {}))
