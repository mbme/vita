(ns viter.react
  (:require [viter.utils :refer [React]]
            [viter.parser :refer [html]]))

(defn- get-args [obj] (aget obj "args"))

(defn- try-to-run [func & rest]
  (when func (apply func rest)))

;; PUBLIC

(defn create-elem [{:keys [displayName
                           componentWillMount
                           componentDidMount] :as config}]
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

        :componentWillMount #(this-as this (try-to-run componentWillMount this))
        :componentDidMount  #(this-as this (try-to-run componentDidMount this))}
       (merge config)
       (clj->js)
       (.createClass React)
       (.createFactory React)))

(defn render [comp elem]
  (.render React comp elem))
