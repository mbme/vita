(ns vita.utils.utils
  (:require [clojure.string :as str]))


(defmacro subscribe
  "Subscribe to element's event.
  Handles cross-browser event names."
  [elem event handler]
  ;; Convert event symbol to google closure
  ;; library EventType and get event name.
  (let [event-name (-> (name event)
                       (str/replace #"-" "")
                       str/upper-case)
        const-name (symbol "EventType" event-name)]
    `(.addEventListener ~elem ~const-name ~handler false)))
