(ns vita.app
  (:require [vita.state :as state]
            [vita.components :as c]
            [viter.core :as v :refer-macros [defc]]
            [vita.url :as url]))

(defc NavLink [{:keys [type icon] :as all} children]
  [:div [:icon {:class icon}] `[:span ~@children]])

(defc NavPanel []
  [:nav
   [:NavLink {:type :records :icon "home"} "records"]])

(defc SearchPanel [{:keys [term children]}]
  [:div
   [:icon.-bars.-2x.&-icon-menu]
   [:input.&-search {:type "text"
                     :placeholder "SEARCH"
                     :defaultValue term
                     :onKeyUp #(state/update-search! (v/e-val %))}]
   `[:div.&-menu ~@children]
   ])

(defc Root []
  [:div
   [:NavPanel]
   [:div.search-panel [:div "result 1"] [:div "result 2"]]
   [:div.workspace [:h1 "test"]]
   ])

(defonce _
  (do
    (state/watch! #(v/render! js/document.body Root %))
    (url/watch! #(js/console.warn (clj->js %)))
    ))
