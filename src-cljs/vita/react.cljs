(ns vita.react (:require-macros [vita.react :refer [fn-this]]))

;; based on quiescent https://github.com/levand/quiescent

(def React js/React)
(def DOM (.-DOM React))
(def div (.-div (.-DOM React)))

(defn- react-class [config] (.createClass React (clj->js config)))
(defn- get-args [obj] (aget obj "args"))
(defn- react-args [this] (get-args (.-props this)))

(defn react-component [config]
  (react-class
   (merge config {
                  :shouldComponentUpdate
                  (fn [next-props] (this-as this
                                            (not= (react-args this)
                                                  (get-args next-props)
                                                  )))

                  ;; wrapper for the plain `render' function
                  :render
                  (fn [] (this-as this (apply (:render config) (react-args this))))
                  })
   ))

(defn create-component [config]
  (fn [& args] ((react-component config) #js {:args args})))
