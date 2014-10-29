(ns viter.react
  (:require [viter.utils :refer [get-words]]))

(def React js/React)

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

;; map of registered Component instances
(def ^:private components (atom {}))

(defn- register-component! [name comp]
  (when (get @components name)
    (throw (str "duplicate component definition: " name)))
  (swap! components assoc name comp)
  comp)

(defn- get-native-elem [name]
  (or (aget (.-DOM React) name)
      (aget (.-addons React) name)))

;; PUBLIC

(defn get-elem [name]
  (or (when-let [elem (get @components name)] [elem false])
      (when-let [elem (get-native-elem name)] [elem true])
      (throw (str "unknown element: " name))))

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
       (.createFactory React)
       (register-component! (:displayName config))))

(defn render [comp elem]
  (.render React comp elem))
