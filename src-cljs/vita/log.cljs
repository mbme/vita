(ns vita.log
  (:require [goog.string.format]))

(enable-console-print!)

(defn format [msg args]
  (apply goog.string/format msg args))

(defn debug [msg & args]
  (js/console.debug (format msg args)))

(defn info [msg & args]
  (js/console.info (format msg args)))

(defn warn [msg & args]
  (js/console.warn (format msg args)))

(defn error [msg & args]
  (js/console.error (format msg args)))
