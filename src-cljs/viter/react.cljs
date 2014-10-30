(ns viter.react
  (:require [viter.utils :refer [get-words React]]
            [viter.parser :refer [html]]))

(defn- get-args [obj] (aget obj "args"))

(defn- get-ref-elem [ctx name]
  (.getDOMNode (aget (.-refs ctx) name)))

(defn- subscribe-events [ctx events]
  (doseq [[k handler] events
          :let [[evt ref] (get-words k)
                elem (get-ref-elem ctx ref)]]
    (.addEventListener elem evt handler)))

(defn- unsubscribe-events [ctx events]
  (doseq [[k handler] events
          :let [[evt ref] (get-words k)
                elem (get-ref-elem ctx ref)]]
    (.removeEventListener elem evt handler)))

;; PUBLIC

(defn create-elem [{:keys [displayName nativeEvents] :as config}]
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
        :componentDidMount
        (fn [] (this-as this (subscribe-events this nativeEvents)))
        :componentWillUnmount
        (fn [] (this-as this (unsubscribe-events this nativeEvents)))}
       (merge config)
       (clj->js)
       (.createClass React)
       (.createFactory React)))

(defn render [comp elem]
  (.render React comp elem))
