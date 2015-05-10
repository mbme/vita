(ns core.bus
  (:require [core.log :as log])
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

(defn trigger [topic & params]
  (let [topic-name (name topic)
        count (handlers-count topic)]
    (log/debug "trigger action %s handlers %s" topic count)
    (apply publish (cons topic-name params)))
  nil)
