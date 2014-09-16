(ns vita.app (:require [vita.generator :as gen]
                       [vita.state :as state]
                       [quiescent :as q :include-macros true]
                       [quiescent.dom :as d]))

(defn- e-val [evt] (.-value (.-target evt)))
(defn- e-key [evt] (.getAttribute (.-target evt) "data-key"))

(defn- css-class [& all]
  (->> all
       (remove nil?)
       (interpose " ")
       (apply str)))

;; HELPERS

(defn- get-record [records name]
  (if-not (nil? name) (->> records
                           (filter #(= (:name %) name))
                           (first))))

(defn- get-selected-record [data]
  (get-record (:records data) (:selected-rec data)))

(defn- has-term? [rec term]
  (if (count term)
    (-> (:name rec)
        (.indexOf term)
        (> -1))
    true))

(defn- filter-records [records term]
  (filter #(has-term? % term) records))

(defn- mark-selected-record [records selected-rec]
  (map #(if (= (:name %) selected-rec)
          (assoc % :selected true)
          %) records))

;; COMPONENTS PART

(q/defcomponent SearchBox [term]
  (d/div {:className "search-box"}
         "Search:" (d/input {:type "text"
                             :defaultValue term
                             :onKeyUp #(state/update-search (e-val %))})
         ))

(q/defcomponent SearchResult [{:keys [name selected]}]
  (d/div {:className (css-class "search-result" (when selected "selected"))
          :data-key name
          :onClick #(state/update-selected-rec (e-key %))} name))

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
             (SearchResults))))

(q/defcomponent Preview [data component]
  (d/div {:id "preview"} (if-not (nil? data) (component data))))

(q/defcomponent Record [{:keys [name data]}]
  (d/div {:className "record"}
         (d/h2 {} name)
         (d/div {} data)))

(q/defcomponent Root [data]
  (d/div {:id "root"}
         (ControlPanel data)
         (Preview (get-selected-record data) Record)))

(defn render [data]
  (q/render (Root data) js/document.body))

;; listen for changes in state and call render
(add-watch state/state :render (fn [_ _ _ data] (render data)))

;; init some test data
(swap! state/state assoc :records (gen/random-records 10))
