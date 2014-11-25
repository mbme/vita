(ns vita.app (:require [vita.state :as s]
                       [vita.components :as c]
                       [vita.workspace]
                       [viter.core :as v :refer-macros [defc]]
                       [vita.url :as url]))

(defc NavPanel []
  [:nav
   [:div.&-link [:icon.-home] "records"]
   [:div.&-link {:onClick s/ws-new-record}[:icon.-plus] "add"]])

(defn- has-term? [rec term]
  (if (count term)
    (-> (:name rec)
        (.toLowerCase)
        (.indexOf (.toLowerCase term))
        (> -1))
    true))

(defc SearchResult [{:keys [record key visible]}]
  [:li {:onClick #(s/ws-open-record key)
        :class (when visible "&-selected")}
   (:name record)])

(defc SearchPanel [{:keys [search-term records workspace-items]}]
  [:div
   [:input.&-search {:type "text"
                     :placeholder "SEARCH"
                     :defaultValue search-term
                     :onKeyUp #(s/update-search! (v/e-val %))}]
   (let [records (filter #(has-term? % search-term) records)]
     [:ul (map #(SearchResult
                 {:record %
                  :key (s/record-id %)
                  :visible (s/ws-is-open? (s/record-id %) workspace-items)}) records)])
   ])

(defc Root [state]
  [:div
   [:NavPanel]
   [:SearchPanel state]
   [:Workspace state]])

(defonce _
  (do
    (s/watch! #(v/render! js/document.body Root %))
    (url/watch! #(js/console.warn (clj->js %)))
    ))
