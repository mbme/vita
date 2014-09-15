(ns vita.app (:require [vita.log :as log]
                       [vita.generator :as gen]
                       [quiescent :as q :include-macros true]
                       [quiescent.dom :as d]))

(defn- e-val [evt] (.-value (.-target evt)))
(defn- e-key [evt] (.getAttribute (.-target evt) "data-key"))

(defn- has-term? [rec term]
  (if (count term)
    (-> (:name rec)
        (.indexOf term)
        (> -1))
    true))

(defonce state (atom {:records (gen/random-records 10)
                      :search-term ""
                      :selected-rec-name nil}))

(defn- update-search
  "If `term' really changed then update state."
  [term]
  (when-not (= term (:search-term @state))
    (log/info "new search term: %s" term)
    (swap! state assoc :search-term term)))

(defn- update-selected-rec [name]
  (when-not (= name (:selected-rec-name @state))
    (log/info "selected record: %s" name)
    (swap! state assoc :selected-rec-name name)))

(defn- get-record [records name]
  (if-not (nil? name) (->> records
                           (filter #(= (:name %) name))
                           (first))))

(defn- filter-records [records term]
  (filter #(has-term? % term) records))

;; COMPONENTS PART

(q/defcomponent SearchBox [term]
  (d/div {:className "search-box"}
         "Search:" (d/input {:type "text"
                             :defaultValue term
                             :onKeyUp #(update-search (e-val %))})
         ))

(q/defcomponent SearchResult [{:keys [name]}]
  (d/div {:className "search-result"
          :data-key name
          :onClick #(update-selected-rec (e-key %))} name))

(q/defcomponent SearchResults [records]
  (apply d/div {:className "search-results"}
         (if (empty? records)
           (list (d/div {} "0 results"))
           (map SearchResult records))))

(q/defcomponent ControlPanel [{:keys [records search-term]}]
  (d/div {:id "control-panel"}
         (SearchBox search-term)
         (SearchResults (filter-records records search-term))))

(q/defcomponent Preview [data component]
  (d/div {:id "preview"} (if-not (nil? data) (component data))))

(q/defcomponent Record [{:keys [name data]}]
  (d/div {:className "record"}
         (d/h2 {} name)
         (d/div {} data)))

(q/defcomponent Root [data]
  (d/div {:id "root"}
         (ControlPanel data)
         (Preview (get-record (:records data) (:selected-rec-name data)) Record)
         ))

(defn render [data]
  (q/render (Root data) js/document.body))

;; listen for changes in state and call render
(add-watch state :render (fn [_ _ _ data] (render data)))
(render @state)
