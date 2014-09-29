(ns vita.app
  (:require [vita.state :as state]
            [vita.page.records :as records]
            [vita.react :as r :refer-macros [defc]]))

(defc NavPanel []
  [:nav [:a "records"]])

(defc SearchPanel [term]
  [:div#search-box
   [:input {:type "text"
            :placeholder "SEARCH"
            :defaultValue term
            :onKeyUp #(state/update-search! (r/e-val %))}
    ]])

(defc NotFoundPage [path]
  [:h1.not-found "page not found"])

(defc Root [{:keys [path path-params] :as state}]
  [:div#root
   (SearchPanel (:search-term state))
   (NavPanel)
   [:div.content
    (condp = path
      :root (records/RecordsPage state)

      (NotFoundPage))
    ]])

(defonce _
  (do
    (state/configure-routing! {"/" :root
                               "*" :none})
    (state/watch! #(r/render (Root %)))
    ))
