(ns vita.app
  (:require [vita.log :as log]
            [vita.generator :as gen]
            [vita.state :as state]
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
  [:li {:class (when-not (:visible record) "hidden")}(:name record)]
  :getKey #(str "key-" (hash (:name %))))

(defc FilterResults [records]
  [:ul.filter-results (map FilterResult records)])

(defc FilterPanel [term records]
  [:aside.filter-panel (FilterBox term) (FilterResults records)])

(defc PreviewPanel [record]
  [:div.preview-panel [:h3 "no data here:("]])

(defc Root [{:keys [search-term records]}]
  [:div#root
   (NavPanel)
   (FilterPanel search-term (state/mark-visible records search-term))
   (PreviewPanel)
   ])

(state/watch! #(r/render (Root %)))
(state/load-records! (gen/random-records 10))
