(ns vita.react (:require [sablono.core :as s :refer-macros [html]]))

;; based on quiescent https://github.com/levand/quiescent

(def React js/React)

(defn- react-class [config] (.createClass React (clj->js config)))
(defn- get-args [obj] (aget obj "args"))

(defn react-component [config]
  (react-class
   (merge config {
                  :shouldComponentUpdate
                  (fn [next-props] (this-as this
                                            (not= (get-args (.-props this))
                                                  (get-args next-props)
                                                  )))

                  ;; wrapper for the plain `render' function
                  :render
                  (fn [] (this-as this (let [render (:render config)
                                             args (get-args (.-props this))]
                                         (html (apply render args)))
                                  ))
                  })
   ))

(defn create-component [{:keys [getKey] :as config}]
  (let [component (react-component config)]
    (fn [& args] (component #js {:args args :key (when getKey (apply getKey args))}))
    ))

(defn render
  ([comp elem] (.renderComponent React comp elem))
  ([comp] (render comp js/document.body)))
