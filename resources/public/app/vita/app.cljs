(ns vita.app
  (:require [vita.state :as state :refer [trigger]]
            [vita.workspace]
            [vita.components :as c]
            [vita.url :as url]

            [viter.core :refer [render!]
             :refer-macros [defc]]
            [viter.react :refer [e-val]]))

(defn- has-term? [atom-id term]
  (if (pos? (count term))
    (-> (:name atom-id)
        (.toLowerCase)
        (.indexOf (.toLowerCase term))
        (> -1))
    true))

;; COMPONENTS

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

(defc Root [state]
  [:div
   [:div.left  [:SearchPanel state]]
   [:div.right [:Workspace state]]])

(defonce _
  (do
    (state/watch! #(render! js/document.body Root %))
    (url/watch! #(js/console.warn (clj->js %)))))
