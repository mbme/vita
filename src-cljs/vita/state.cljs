(ns vita.state
  (:require [vita.log :as log]))

(defn- has-term? [rec term]
  (if (count term)
    (-> (:name rec)
        (.indexOf term)
        (> -1))
    true))

(defn- mark-visible [records term]
  (map #(assoc % :visible (has-term? % term)) records))

(defonce ^:private state (atom {:records '()
                                :search-term ""
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
