(ns viter.core
  (:require [viter.react  :as r]
            [viter.elements :refer [register-component!]]
            [viter.utils :as utils]))

(defn create-component [comp-name render config]
  "Creates and registers viter component."
  (let [config     (assoc config :render render :displayName comp-name)
        react-elem (r/create-elem config)]
    (register-component!
     comp-name (fn [args rest]
                 (let [js-args (js-obj "args" (assoc config :children rest))
                       key     (:key args)]

                   ;; add key attribute to react element properties if passed
                   (when-not (nil? key) (aset js-args "key" key))

                   (react-elem js-args))))
    ))

;; UTILS

(defn e-val [evt] (.-value (.-target evt)))

(def ^:private render-data nil)
(def ^:private render-scheduled false)
(defn- actually-render []
  (let [[elem comp params] render-data]
    (r/render (apply comp params) elem)
    (set! render-scheduled false)))

(defn render! [elem comp & params]
  (set! render-data [elem comp params])
  (when-not render-scheduled
    (set! render-scheduled true)
    (utils/request-animation-frame actually-render)))
