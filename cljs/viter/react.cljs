(ns viter.react
  (:require [com.facebook.React]))

(def ^:private React js/React)
(when (nil? React) (throw "can't find React library"))

(defn create-class
  "Create React component class."
  [obj]
  (.createClass React obj))

(defn create-factory
  "Creates React component factory
  from React component class."
  [class]
  (.createFactory React class))

(defn get-elem
  "Get React native elem by name."
  [name]
  (or (aget (.-DOM React) name)
      (throw (str "unknown react component: " name))))

(defn render
  "Render ReactElement into DOM."
  [elem dom-elem]
  (.render React elem dom-elem))

(defn get-node [comp]
  (.findDOMNode React comp))
