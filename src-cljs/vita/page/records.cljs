(ns vita.page.records
  (:require [vita.state :as state]
            [vita.react :as r :refer-macros [defc]]))

(defc FilterResult [record]
  [:li.result {:class [(when-not (:visible record) "hidden")
                       (when (:selected record)    "selected")]
               :onClick #(state/update-selected! (state/record-id record))}
   [:h5 (:name record)]
   [:span (apply str(take 60 (:data record)))]]
  :getKey #(str "key-" (state/record-id %)))

(defc FilterResults [records]
  [:ul.filter-results (map FilterResult records)])

(defc FilterPanel [records]
  [:aside.filter-panel (FilterResults records)])

(defc PreviewPanel [record]
  [:div.preview-panel
   (if (nil? record)
     [:h3.title "no data here:("]
     [:div.record
      [:h3.title (:name record)]
      [:article (:data record)]])
   ])

(defc RecordsPage [{:keys [search-term records selected-id]}]
  [:div.page.page-records
   (FilterPanel (-> records
                    (state/mark-visible search-term)
                    (state/mark-selected selected-id)))
   (PreviewPanel (state/record-by-id selected-id records))
   ]
  :menu [:span "save"])
