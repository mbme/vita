(ns vita.app
  (:require [vita.log :as log]
            [vita.generator :as gen]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            ))

(defn- e-val [evt] (.-value (.-target evt)))
(defn- mark-visible [rec visible] (assoc rec :visible visible))
(defn- visible? [rec term]
  (-> (:name rec)
      (.indexOf term)
      (> -1)))

(defonce state (atom {
                      :records (map #(mark-visible % true) (gen/random-records 10))
                      }))

(defn- search-update [term]
  (log/info "new search term: %s" term)
  (swap! state (fn [s]
                 (->> (:records s)
                      (map #(mark-visible % (visible? % term)))
                      (assoc s :records)))
         ))

(q/defcomponent SearchBox []
  (d/div {:className "search-box"}
         "Search:"
         (d/input {
                   :type "text"
                   :onKeyUp #(search-update (e-val %))
                   })
         ))

(q/defcomponent SearchResult [record]
  (d/div {:className "search-result"} (:name record)))

(q/defcomponent SearchResults [records]
  (apply d/div {:className "search-results"}
         (map SearchResult (filter #(:visible %) records))
         ))

(q/defcomponent ControlPanel [records]
  (d/div {:id "control-panel"} (SearchBox) (SearchResults records)))

(q/defcomponent Preview [component data]
  (d/div {:id "preview"} (if (nil? data)
                           (d/h3 {} "no data :(")
                           (component data)
                           )))

(q/defcomponent Record[{:keys [name data]}]
  (d/div {:className "record" :key (hash name)}
         (d/h2 {} name)
         (d/div {} data)
         ))

(q/defcomponent Root [records]
  (d/div {:id "root"}
         (ControlPanel records)
         (Preview Record (first records))
         ))

(defn render [data]
  (q/render (Root (:records data)) js/document.body))

;; listen for changes in state and call render
(add-watch state :render
           (fn [_ _ _ data] (render data)))
(render @state)
