(ns vita.utils.log
  (:require-macros vita.utils.log))

(defn prepare [param]
  (cond
    (keyword? param) (str param)
    :else param))

(enable-console-print!)
