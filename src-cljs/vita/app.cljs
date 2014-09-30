(ns vita.app
  (:require [vita.state :as state]
            [vita.page.records :as records]
            [vita.components :as c]
            [vita.react :as r :refer-macros [defc]]))

(defc NavPanel []
  [:nav [:a (c/icon "home") "records"]])

(defc SearchPanel [term menu]
  [:div#search-panel
   (c/icon "bars" "2x")
   [:input.search {:type "text"
                   :placeholder "SEARCH"
                   :defaultValue term
                   :onKeyUp #(state/update-search! (r/e-val %))}]
   menu
   ])

(defc NotFoundPage []
  [:h1.not-found "page not found"])

(defc Root [{:keys [path path-params] :as state}]
  (let [page (condp = path
               :root records/RecordsPage
               NotFoundPage)]
    [:div#root
     (SearchPanel (:search-term state) (:menu page))
     (NavPanel)
     [:div.content (page state)]]
    ))

(defonce _
  (do
    (state/configure-routing! {"/" :root
                               "*" :none})
    (state/watch! #(r/render (Root %)))
    ))
