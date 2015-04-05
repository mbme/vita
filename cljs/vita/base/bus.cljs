(ns vita.base.bus
  (:require [vita.utils.log :as log])
  (:import goog.pubsub.PubSub))

(def bus (new PubSub))
(def publish (.bind (.-publish bus) bus))

(defn handlers-count [topic]
  (.getCount bus (name topic)))

(defn on [topic handler]
  (.subscribe bus (name topic) handler)
  nil)

(defn off [topic handler]
  (.unsubscribe bus (name topic) handler)
  nil)

(defn on-many [& items]
  (->> (partition 2 items)
       (map (fn [[topic handler]]
              (on topic handler)))
       doall)
  nil)

(defn trigger [topic & params]
  (let [topic-name (name topic)
        count (handlers-count topic)]
    (log/debug "trigger action %s handlers %s" topic count)
    (apply publish (cons topic-name params)))
  nil)
