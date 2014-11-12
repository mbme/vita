(ns vita.state
  (:require [vita.log :as log :include-macros true]))

(defonce ^:private state (atom {:records '()
                                :search-term ""
                                :workspace-menu false
                                }))

(defn- update-records [fn]
  (swap! state assoc :records (map fn (:records @state))))

;; PUBLIC

(defn record-id [record]
  (hash (:name record)))

(defn rec-by-id [id]
  (first (filter #(= id (record-id %)) (:records @state))))

(defn toggle-workspace-menu []
  (swap! state #(assoc % :workspace-menu (not (:workspace-menu %)))))

(defn update-search!
  "If `term' really changed then update state."
  [term]
  (when-not (= term (:search-term @state))
    (log/info "new search term: %s" term)
    (swap! state assoc :search-term term)))

(defn update-record [id new-record]
  (update-records #(if (= (record-id %) id) new-record %)))

(defn open-record [id]
  (if-let [record (rec-by-id id)]
    (when-not (= (:state record) :show)
      (log/info "select record: %s" id)
      (update-record id (assoc record :state :show)))))

(defn close-records []
  (log/info "closing all records")
  (update-records #(assoc % :state nil)))

(defn close-record [id]
  (when-let [record (rec-by-id id)]
    (log/info "closing record: %s" id)
    (update-record id (assoc record :state nil))))

(defn load-records! [records]
  (log/info "adding new %s records" (count records))
  (swap! state assoc :records records))

(defn watch! [func]
  (add-watch state :render (fn [_ _ _ data] (func data))))
