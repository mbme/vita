(ns vita.app (:require [vita.log :as log]
                       [vita.generator :as gen]
                       [vita.react :as r])
    (:require-macros [vita.react :refer [defc]]))

(defonce state (atom {
                      :records '()
                      :search-term ""
                      }))

(defc NavPanel []
  [:nav [:a "records"]])

(defc FilterBox []
  [:div.filter-box [:input {:type "text" :placeholder "start typing to filter records"}]])

(defc FilterResult [record]
  [:li (:name record)]
  :getKey #(str "key-" (hash (:name %))))

(defc FilterResults [records]
  [:ul.filter-results (map FilterResult records)])

(defc FilterPanel [records]
  [:aside.filter-panel (FilterBox) (FilterResults records)])

(defc PreviewPanel [record]
  [:div.preview-panel [:h3 "no data here:("]])

(defc Root [state]
  [:div#root (NavPanel) (FilterPanel (:records state)) (PreviewPanel)])

(add-watch state :render (fn [_ _ _ data] (r/render (Root data))))
(swap! state assoc :records (gen/random-records 10))
