(ns viter.core
  (:require [viter.react  :as r]
            [viter.elements :refer [register-component!]]
            [viter.utils :refer [request-animation-frame]]))

(defn create-component [comp-name render config]
  "Creates and registers viter component."
  (let [config     (assoc config :render render :displayName comp-name)
        react-elem (r/create-elem config)]
    (register-component!
     comp-name (fn [args rest]
                 (let [js-args (js-obj "args" (assoc args :children rest))
                       key     (:key args)]

                   ;; add key attribute to react element properties if passed
                   (when-not (nil? key) (aset js-args "key" key))

                   (react-elem js-args))))
    ))

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
    (request-animation-frame actually-render)))