(ns vita.app (:require [vita.state :as s]
                       [vita.workspace]
                       [vita.components :as c]
                       [viter.core :as v :refer-macros [defc]]
                       [vita.url :as url]))

(defn- has-term? [atom-id term]
  (if (pos? term)
    (-> (:name atom-id)
        (.toLowerCase)
        (.indexOf (.toLowerCase term))
        (> -1))
    true))

(defn- visible-atoms [atoms-list term]
  (filter #(has-term? % term) atoms-list))

;; COMPONENTS

(defc SearchResult [{:keys [atom-id key selected]}]
  [:li {:onClick #(s/trigger :ws-open key)
        :class (when selected "&-selected")}
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
             :visible (s/ws-is-open? key ws-items)}))
         (visible-atoms atoms-list search-term))]])

(defc Root [state]
  [:div
   [:div.left  [:SearchPanel state]]
   [:div.right [:Workspace state]]])

(defonce _
  (do
    (s/watch! #(v/render! js/document.body Root %))
    (url/watch! #(js/console.warn (clj->js %)))))
