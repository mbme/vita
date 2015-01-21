(ns vita.app (:require [vita.state :as s]
                       [vita.workspace]
                       [vita.components :as c]
                       [viter.core :as v :refer-macros [defc]]
                       [vita.url :as url]))

(defn- has-term? [atom-id term]
  (if (pos? (count term))
    (-> (:name atom-id)
        (.toLowerCase)
        (.indexOf (.toLowerCase term))
        (> -1))
    true))

;; COMPONENTS

(defc SearchResult [{:keys [atom-id key visible]}]
  [:li {:onClick #(s/trigger :ws-open key)
        :class (when visible "&-visible")}
   (:name atom-id)])

(defc SearchPanel [{:keys [search-term atoms-list ws-items]}]
  [:div
   [:input.&-search {:type "text"
                     :placeholder "SEARCH"
                     :defaultValue search-term
                     :onChange #(s/trigger :search-update (v/e-val %))}]
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
    (s/watch! #(v/render! js/document.body Root %))
    (url/watch! #(js/console.warn (clj->js %)))))
