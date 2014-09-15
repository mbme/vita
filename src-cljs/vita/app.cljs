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
                      :selected-rec nil}))

(defn- update-search
  "If `term' really changed then update state."
  [term]
  (when-not (= term (:search-term @state))
    (log/info "new search term: %s" term)
    (swap! state assoc :search-term term)))

(defn- update-selected-rec [name]
  (when-not (= name (:selected-rec @state))
    (log/info "selected record: %s" name)
    (swap! state assoc :selected-rec name)))

(defn- get-record [records name]
  (if-not (nil? name) (->> records
                           (filter #(= (:name %) name))
                           (first))))

(defn- filter-records [records term]
  (filter #(has-term? % term) records))

(defn- mark-selected-record [records selected-rec]
  (map #(if (= (:name %) selected-rec)
          (assoc % :selected true)
          %)
       records))

(defn class-name [& all]
  (->> all
       (remove nil?)
       (interpose " ")
       (apply str)))

;; COMPONENTS PART

(q/defcomponent SearchBox [term]
  (d/div {:className "search-box"}
         "Search:" (d/input {:type "text"
                             :defaultValue term
                             :onKeyUp #(update-search (e-val %))})
         ))

(q/defcomponent SearchResult [{:keys [name selected]}]
  (d/div {:className (class-name "search-result" (when selected "selected"))
          :data-key name
          :onClick #(update-selected-rec (e-key %))} name))

(q/defcomponent SearchResults [records]
  (apply d/div {:className "search-results"}
         (if (empty? records)
           (list (d/div {} "0 results"))
           (map SearchResult records))))

(q/defcomponent ControlPanel [{:keys [records search-term selected-rec]}]
  (d/div {:id "control-panel"}
         (SearchBox search-term)
         (-> records
             (filter-records search-term)
             (mark-selected-record selected-rec)
             (SearchResults))
         ))

(q/defcomponent Preview [data component]
  (d/div {:id "preview"} (if-not (nil? data) (component data))))

(q/defcomponent Record [{:keys [name data]}]
  (d/div {:className "record"}
         (d/h2 {} name)
         (d/div {} data)))

(q/defcomponent Root [data]
  (d/div {:id "root"}
         (ControlPanel data)
         (Preview (get-record (:records data) (:selected-rec data)) Record)
         ))

(defn render [data]
  (q/render (Root data) js/document.body))

;; listen for changes in state and call render
(add-watch state :render (fn [_ _ _ data] (render data)))
(render @state)
