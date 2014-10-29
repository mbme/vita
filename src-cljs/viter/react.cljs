(ns viter.react
  (:require [viter.utils :refer [get-words]]))

(def React js/React)

(defn get-elem [name]
  (or (aget (.-DOM React) name)
      (aget (.-addons React) name)))

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

(defn create-elem [config]
  (->> {:shouldComponentUpdate
        (fn [next-props]
          (this-as this
                   (not= (get-args (.-props this))
                         (get-args next-props))))

        :render
        (fn []
          (this-as this
                   (let [render (:render config)
                         args (get-args (.-props this))]
                     (render args))))
        :componentDidMount
        (fn []
          (this-as this
                   (subscribe-events this (:nativeEvents config))))
        :componentWillUnmount
        (fn []
          (this-as this
                   (unsubscribe-events this (:nativeEvents config))))
        }
       (merge config)
       (clj->js)
       (.createClass React)
       (.createFactory React)))

(defn render [comp elem]
  (.render React comp elem))
