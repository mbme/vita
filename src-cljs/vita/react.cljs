(ns vita.react
  (:require [sablono.core :as s :refer-macros [html]]))

(def React js/React)

(defn- get-args [obj] (aget obj "args"))
(defn- react-class [config]
  (->> {:shouldComponentUpdate
        (fn [next-props] (this-as this
                                  (not= (get-args (.-props this))
                                        (get-args next-props)
                                        )))

        ;; wrapper for the plain `render' function
        :render
        (fn [] (this-as this (let [render (:render config)
                                   args (get-args (.-props this))]
                               (html (apply render args)))
                        ))}
       (merge config)
       (clj->js)
       (.createClass React)))

(defrecord Component [config render]
  IFn
  (-invoke [this & args]
    (let [getKey (:getKey this)]
      (render #js {:args args
                   :key (when getKey (apply getKey args))}
              ))
    ))

(extend-protocol ILookup
  Component
  (-lookup [comp k] (get comp/config k))
  (-lookup [comp k not-found] (get comp/config k not-found)))

(defn create-component [config]
  (->Component config (react-class config)))

;; UTILS

(defn e-val [evt] (.-value (.-target evt)))

(defn render
  ([comp elem] (.renderComponent React comp elem))
  ([comp] (render comp js/document.body)))
