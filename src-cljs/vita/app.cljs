(ns vita.app (:require [vita.log :as log]
                       [vita.generator :as gen]
                       [quiescent :as q :include-macros true]
                       [quiescent.dom :as d]))

(defn- e-val [evt] (.-value (.-target evt)))
(defn- has-term? [rec term]
  (if (count term)
    (-> (:name rec)
        (.indexOf term)
        (> -1))
    true))

(defonce state (atom {:records (gen/random-records 10)
                      :search-term ""
                      }))

(defn- search-update
  "If `term' really changed then update state."
  [term]
  (when-not (= term (:search-term @state))
    (log/info "new search term: %s" term)
    (swap! state assoc :search-term term)))

(defn- filter-records [records term]
  (filter #(has-term? % term) records))

;; COMPONENTS PART

(q/defcomponent SearchBox [term]
  (d/div {:className "search-box"}
         "Search:" (d/input {:type "text"
                             :defaultValue term
                             :onKeyUp #(search-update (e-val %))})
         ))

(q/defcomponent SearchResult [record]
  (d/div {:className "search-result"} (:name record)))

(q/defcomponent SearchResults [records]
  (apply d/div {:className "search-results"}
         (if (empty? records)
           (list (d/div {} "0 results"))
           (map SearchResult records))))

(q/defcomponent ControlPanel [{:keys [records search-term]}]
  (d/div {:id "control-panel"}
         (SearchBox search-term)
         (SearchResults (filter-records records search-term))))

(q/defcomponent Preview [component data]
  (d/div {:id "preview"} (if-not (nil? data) (component data))))

(q/defcomponent Record[{:keys [name data]}]
  (d/div {:className "record" :key (hash name)}
         (d/h2 {} name)
         (d/div {} data)))

(q/defcomponent Root [data]
  (d/div {:id "root"}
         (ControlPanel data)
         (Preview Record)))

(defn render [data]
  (q/render (Root data) js/document.body))

;; listen for changes in state and call render
(add-watch state :render (fn [_ _ _ data] (render data)))
(render @state)
