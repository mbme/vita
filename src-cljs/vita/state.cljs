(ns vita.state (:require [vita.log :as log]))

(defonce state (atom {:records '()
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
