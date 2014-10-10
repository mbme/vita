(ns vita.app
  (:require [vita.state :as state]
            [vita.page.records :as records]
            [vita.components :as c]
            [viter.core :as r :refer-macros [defc]]))

(defc NavPanel []
  [:nav [:a [:icon.home] "records"]])

(defc SearchPanel [{:keys [term children]}]
  [:div
   [:icon.bars.2x]
   [:input.search {:type "text"
                   :placeholder "SEARCH"
                   :defaultValue term
                   :onKeyUp #(state/update-search! (r/e-val %))}]
   `[:span.&-menu ~@children]
   ])

(defc NotFoundPage []
  [:h1.not-found "page not found"])

(defc Root [{:keys [path path-params search-term] :as state}]
  (let [page (condp = path
               :root records/RecordsPage
               NotFoundPage)]
    [:div
     [:SearchPanel {:term search-term} (:menu page)]
     [:NavPanel]
     [:div.content (page state)]]
    ))

(defonce _
  (do
    (state/configure-routing! {"/" :root
                               "*" :none})
    (state/watch! #(r/render [:Root %]))
    ))
