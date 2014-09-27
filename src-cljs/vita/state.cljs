(ns vita.state
  (:require [vita.log :as log]))

(defn- has-term? [rec term]
  (if (count term)
    (-> (:name rec)
        (.indexOf term)
        (> -1))
    true))

(defn- record-id [record]
  (hash (:name record)))

(defn- mark-visible [records term]
  (map #(assoc % :visible (has-term? % term)) records))

(defn- mark-selected [records selected-id]
  (map #(assoc % :selected (= selected-id (record-id %))) records))

(defn- record-by-id [id records]
  (first (filter #(= id (record-id %)) records)))

(defonce ^:private state (atom {:records '()
                                :search-term ""
                                :selected-id nil
                                :path :root
                                :path-params {}
                                }))

;; PUBLIC

(defn update-search!
  "If `term' really changed then update state."
  [term]
  (when-not (= term (:search-term @state))
    (log/info "new search term: %s" term)
    (swap! state assoc :search-term term)))

(defn update-selected! [id]
  (when-not (= id (:selected-id @state))
    (log/info "new selected record: %s" id)
    (swap! state assoc :selected-id id)))

(defn load-records! [records]
  (log/info "adding new %s records" (count records))
  (swap! state assoc :records records))

(defn watch! [func]
  (add-watch state :render (fn [_ _ _ data] (func data))))

(defn set-path! [path params]
  (log/info "changed path to %s [%s]" path params)
  (swap! state assoc :path path :path-params params))
