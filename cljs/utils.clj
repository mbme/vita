(ns utils
  (:require [clojure.string :as str]))

(defn- to-closure-event
  "Convert event symbol to google closure
  library EventType and get event name."
  [event]
  (let [event-name
        (-> (name event)
            (str/replace #"-" "")
            str/upper-case)]
    (symbol "EventType" event-name)))

(defmacro subscribe
  "Subscribe to element's event.
  Handles cross-browser event names."
  [elem event handler]
  (let [event-name (to-closure-event event)]
    `(.addEventListener ~elem ~event-name ~handler false)))

(defmacro unsubscribe
  "Unsubscribe handler."
  [elem event handler]
  (let [event-name (to-closure-event event)]
    `(.removeEventListener ~elem ~event-name ~handler false)))
