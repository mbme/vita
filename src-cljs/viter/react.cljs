(ns viter.react
  (:require [viter.utils :refer [React]]
            [viter.parser :refer [html]]))

(defn- get-args [obj] (aget obj "args"))

(defn- try-to-run [func & rest]
  (when func (apply func rest)))

(defn- run-with-this [method]
  #(this-as this (try-to-run method this)))

;; PUBLIC

(defn create-elem [{:keys [displayName
                           componentWillMount
                           componentDidMount
                           componentDidUpdate
                           componentWillUnmount] :as config}]
  (->> {:shouldComponentUpdate
        (fn [next-props]
          (this-as this
                   (not= (get-args (.-props this))
                         (get-args next-props))))

        :render
        (fn []
          (this-as this
                   (let [args (get-args (.-props this))
                         rendered   ((:render config) args this)]
                     (html rendered displayName true))))

        :componentWillMount    (run-with-this  componentWillMount)
        :componentDidMount     (run-with-this  componentDidMount)
        :componentDidUpdate    (run-with-this  componentDidUpdate)
        :componentWillUnmount  (run-with-this  componentWillUnmount)}
       (merge config)
       (clj->js)
       (.createClass React)
       (.createFactory React)))

(defn render [comp elem]
  (.render React comp elem))

(defn get-ref [this ref]
  (aget (.-refs this) ref))

(defn get-node [el]
  (.getDOMNode el))

(defn deref-node [this ref]
  (get-node (get-ref this ref)))

(defn e-val [evt] (.-value (.-target evt)))
