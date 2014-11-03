(ns vita.state
  (:require [vita.log :as log :include-macros true]))

(defonce ^:private state (atom {:records '()
                                :search-term ""
                                :types #{}
                                :selected-ids #{}
                                }))

;; PUBLIC

(defn record-id [record]
  (hash (:name record)))

(defn rec-by-id [id]
  (first (filter #(= id (record-id %)) (:records @state))))

(defn update-search!
  "If `term' really changed then update state."
  [term]
  (when-not (= term (:search-term @state))
    (log/info "new search term: %s" term)
    (swap! state assoc :search-term term)))

(defn open-record! [id]
  (when-not (contains? (:selected-ids @state) id)
    (log/info "select record: %s" id)
    (swap! state update-in [:selected-ids] conj id)))

(defn close-records! []
  (when-not (empty? (:selected-ids @state))
    (log/info "closing all records")
    (swap! state assoc :selected-ids #{})))

(defn close-record! [id]
  (if (contains? (:selected-ids @state) id)
    (do
      (log/info "closing record %s" id)
      (swap! state update-in [:selected-ids] disj id))
    (log/warn "can't close record %s: not open" id)))

(defn load-records! [records]
  (log/info "adding new %s records" (count records))
  (swap! state assoc :records records))

(defn watch! [func]
  (add-watch state :render (fn [_ _ _ data] (func data))))
