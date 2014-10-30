(ns vita.state
  (:require [vita.log :as log :include-macros true]))

(defn record-id [record]
  (hash (:name record)))

(defonce ^:private state (atom {:records '()
                                :search-term ""
                                :types #{}
                                }))

;; PUBLIC

(defn update-search!
  "If `term' really changed then update state."
  [term]
  (when-not (= term (:search-term @state))
    (log/info "new search term: %s" term)
    (swap! state assoc :search-term term)))

(defn load-records! [records]
  (log/info "adding new %s records" (count records))
  (swap! state assoc :records records))

(defn watch! [func]
  (add-watch state :render (fn [_ _ _ data] (func data))))
