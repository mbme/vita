(ns vita.base.bus
  (:require [vita.utils.log :as log]))

;; EVENT BUS (ACTIONS)
(def events (atom {}))

(defn off [action handler]
  (swap! events
         (fn [events]
           (if-let [handlers (get events action)]
             (assoc events action (disj handlers handler))
             (log/error "can't unsubscribe handler for event" action)))))

(defn on
  "Register `handler' for `action'.
  Returns function which unsubscribes handler."
  [action handler]
  (swap! events
         (fn [events]
           (assoc events action
                  ;; if this action already has handlers then add
                  ;; new handler to the set, else create new set
                  (if-let [handlers (get events action)]
                    (conj handlers handler)
                    #{handler}))))
  #(off action handler))

(defn on-filter [action filter handler]
  (on action
      (fn [& params]
        (when (apply filter params)
          (apply handler params)))))

(defn on-many [& items]
  (->> (partition 2 items)
       (map (fn [[action handler]]
              (on action handler)))
       doall))

(defn trigger
  "Dispatch `action' with `params'."
  [action & params]
  ;; run all action handlers with specified params
  (log/debug "trigger action %s handlers %s"
             action (count (get @events action)))
  (doseq [handler (get @events action)] (apply handler params)))
