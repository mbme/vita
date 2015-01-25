(ns vita.log)

(defn prepare [param]
  (cond
    (keyword? param) (str param)
    :else param))

(enable-console-print!)
