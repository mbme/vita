(ns vita.app
  (:require [vita.state :as state]
            [vita.components :as c]
            [viter.core :as v :refer-macros [defc]]
            [vita.url :as url]))

(defc NavPanel []
  [:nav [:a [:icon.-home] "records"]])

(defc SearchPanel [{:keys [term children]}]
  [:div
   [:icon.-bars.-2x.&-icon-menu]
   [:input.&-search {:type "text"
                     :placeholder "SEARCH"
                     :defaultValue term
                     :onKeyUp #(state/update-search! (v/e-val %))}]
   `[:div.&-menu ~@children]
   ])

(defc NotFoundPage []
  [:h1.not-found "page not found"])

(defc Root [{:keys [path search-term] :as state}]
  [:h1
   "HELLO WORLD"])

(defonce i (atom 0))
(defonce _
  (do
    (state/watch! #(v/render! js/document.body Root %))
    (url/watch! #(js/console.warn (clj->js %)))
    (js/window.setInterval #(url/set! (str "?q=" (swap! i inc))) 3000)
    ))
