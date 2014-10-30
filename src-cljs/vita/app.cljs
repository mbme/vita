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

(defc SearchResult [{:keys [record]}]
  [:li (:name record)])

(defc SearchPanel [{:keys [term records]}]
  [:div
   [:input.&-search {:type "text"
                     :placeholder "SEARCH"
                     :defaultValue term
                     :onKeyUp #(state/update-search! (v/e-val %))}]
   (let [records (filter #(has-term? % term) records)]
     [:ul (map #(SearchResult {:record % :key (state/record-id %)}) records)])
   ])

(defc Root [{:keys [search-term records]}]
  [:div
   [:NavPanel]
   [:SearchPanel {:term search-term :records records}]
   [:div.workspace [:h1 "test"]]
   ])

(defonce _
  (do
    (state/watch! #(v/render! js/document.body Root %))
    (url/watch! #(js/console.warn (clj->js %)))
    ))
