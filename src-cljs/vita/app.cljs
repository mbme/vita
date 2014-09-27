(ns vita.app
  (:require [vita.log :as log]
            [vita.generator :as gen]
            [vita.state :as state]
            [vita.routing :as routing]
            [vita.react :as r])
  (:require-macros [vita.react :refer [defc]]))

(defn- e-val [evt] (.-value (.-target evt)))

(defc NavPanel []
  [:nav [:a "records"]])

(defc FilterBox [term]
  [:div.filter-box
   [:input {:type "text"
            :placeholder "start typing to filter records"
            :defaultValue term
            :onKeyUp #(state/update-search! (e-val %))}
    ]])

(defc FilterResult [record]
  [:li.result {:class [(when-not (:visible record) "hidden")
                       (when (:selected record)    "selected")]
               :onClick #(state/update-selected! (state/record-id record))}
   [:h5 (:name record)]
   [:span (apply str(take 60 (:data record)))]]
  :getKey #(str "key-" (state/record-id %)))

(defc FilterResults [records]
  [:ul.filter-results (map FilterResult records)])

(defc FilterPanel [term records]
  [:aside.filter-panel
   (FilterBox term)
   (FilterResults records)])

(defc PreviewPanel [record]
  [:div.preview-panel
   (if (nil? record)
     [:h3.title "no data here:("]
     [:div.record
      [:h3.title (:name record)]
      [:article (:data record)]])
   ])

(defc RecordsPage [{:keys [search-term records selected-id]}]
  [:div.records-page
   (FilterPanel search-term (-> records
                                (state/mark-visible search-term)
                                (state/mark-selected selected-id)))
   (PreviewPanel (state/record-by-id selected-id records))
   ])

(defc NotFoundPage [path]
  [:h1 "page not found"])

(defc Root [{:keys [path path-params] :as state}]
  [:div#root
   (NavPanel)
   [:div.content
    (condp = path
      :root (RecordsPage state)

      (NotFoundPage))
    ]])

;; load test data once
(defonce _ (do
             (routing/configure! {
                                  "/" :root
                                  "*" :none})
             (state/watch! #(r/render (Root %)))
             (state/load-records! (gen/random-records 10))
             ))
