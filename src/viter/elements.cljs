(ns viter.elements
  (:require [viter.react :refer [React]]))

;; map of registered Component instances
(def ^:private components (atom {}))

;; retrieves React wrappers for native DOM elements
(defn- get-native-elem [name]
  (aget (.-DOM React) name))

;; registers created viter component
(defn register-component! [name comp]
  (when (get @components name)
    (throw (str "duplicate component definition: " name)))
  (swap! components assoc name comp)
  comp)

(defn get-elem [name]
  "Get React element or viter component by `name'."
  (or (when-let [elem (get @components name)] [elem false])
      (when-let [elem (get-native-elem name)] [elem true])
      (throw (str "unknown element: " name))))
