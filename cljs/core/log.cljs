(ns core.log
  (:require-macros core.log))

(defn prepare [param]
  (cond
    (keyword? param) (str param)
    :else param))

(enable-console-print!)
