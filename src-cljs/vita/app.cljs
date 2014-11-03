(ns vita.app
  (:require [vita.state :as state]
            [vita.components :as c]
            [viter.core :as v :refer-macros [defc]]
            [vita.url :as url]))

(defc NavLink [{:keys [type icon children] :as all}]
  [:div [:icon {:class icon}] `[:span ~@children]])

(defc NavPanel []
  [:nav
   [:NavLink {:type :records :icon "-home"} "records"]])

(defn- has-term? [rec term]
  (if (count term)
    (-> (:name rec)
        (.indexOf term)
        (> -1))
    true))

(defc SearchResult [{:keys [record selected]}]
  [:li {:onClick #(state/update-selected! (state/record-id record))
        :class (when selected "&-selected")}
   (:name record)])

(defc SearchPanel [{:keys [search-term records selected-ids]}]
  [:div
   [:input.&-search {:type "text"
                     :placeholder "SEARCH"
                     :defaultValue search-term
                     :onKeyUp #(state/update-search! (v/e-val %))}]
   (let [records (filter #(has-term? % search-term) records)]
     [:ul (map #(SearchResult {:record %
                               :key (state/record-id %)
                               :selected (contains? selected-ids (state/record-id %))})
               records)])
   ])

(defc Record [{:keys [record]}]
  [:div [:h3 (:name record)] [:div (:data record)]])

(defc Workspace [{:keys [records selected-ids]}]
  [:div
   [:div.&-panel
    [:span "fullscreen " [:icon.-expand]]
    [:span "close all " [:icon.-close]]]
   [:div.&-records
    [:div.&-masonry
     (map #(Record {:record (state/rec-by-id %) :key %}) selected-ids)]]
   ])

(defc Root [state]
  [:div
   [:NavPanel]
   [:SearchPanel state]
   [:Workspace state]])

(defonce _
  (do
    (state/watch! #(v/render! js/document.body Root %))
    (url/watch! #(js/console.warn (clj->js %)))
    ))
