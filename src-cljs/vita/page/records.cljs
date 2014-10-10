(ns vita.page.records
  (:require [vita.state :as state]
            [viter.utils :as utils]
            [viter.core :refer-macros [defc]]))

(defc FilterResult [{:keys [record]}]
  [:li {:class (utils/join (flatten [(when-not (:visible record) "hidden")
                                     (when (:selected record)    "selected")]))
        :onClick #(state/update-selected! (state/record-id record))}
   [:h5 (:name record)]
   [:span (apply str (take 60 (:data record)))]
   ])

(defn buildKey [record]
  (str "key-" (state/record-id record)))

(defc FilterResults [{:keys [records]}]
  [:ul (map #(FilterResult {:record %
                            :key (buildKey %)})
            records)])

(defc FilterPanel [attrs]
  [:aside [:FilterResults attrs ]])

(defc PreviewPanel [{:keys [record]}]
  [:div
   (if (nil? record)
     [:h3.&-title "no data here:("]
     [:div.record
      [:h3.title (:name record)]
      [:article (:data record)]])
   ])

(defc RecordsPage [{:keys [search-term records selected-id]}]
  [:div.page
   [:FilterPanel {:records (-> records
                               (state/mark-visible search-term)
                               (state/mark-selected selected-id))} ]
   [:PreviewPanel {:record (state/record-by-id selected-id records)} ]]

  :menu [:button "save"])
