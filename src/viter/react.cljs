(ns viter.react
  (:require [viter.utils :refer [React]]
            [viter.parser :refer [html]]))

(defn- get-args [obj] (aget obj "args"))

(defn- try-to-run [func & rest]
  (when func (apply func rest)))

(defn- with-this [method]
  #(this-as this (try-to-run method this)))

;; PUBLIC

(defn create-elem [{:keys [displayName
                           render
                           will-mount
                           did-mount
                           did-update
                           will-unmount]}]
  (->>
   {:shouldComponentUpdate
    (fn [next-props]
      (this-as this
               (not= (get-args (.-props this))
                     (get-args next-props))))

    :render
    (fn []
      (this-as this
               (let [args (get-args (.-props this))
                     rendered   (render args this)]
                 (html rendered displayName true))))

    :componentWillMount    (with-this  will-mount)
    :componentDidMount     (with-this  did-mount)
    :componentDidUpdate    (with-this  did-update)
    :componentWillUnmount  (with-this  will-unmount)}
   (clj->js)
   (.createClass React)
   (.createFactory React)))

(defn react-render [comp elem]
  (.render React comp elem))

(defn get-ref [this ref]
  (aget (.-refs this) ref))

(defn get-node [el]
  (.getDOMNode el))

(defn deref-node [this ref]
  (get-node (get-ref this ref)))

(defn e-val [evt] (.-value (.-target evt)))
