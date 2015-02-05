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

(def ^:private render-queue #js [])
(def ^:private render-scheduled false)

(defn- render-item [[elem comp params]]
  (r/render (apply comp params) elem))

(defn- actually-render []
  ;; render all queued items
  (.forEach render-queue render-item)

  ;; remove all items from queue
  (aset render-queue "length" 0)

  (set! render-scheduled false))

(defn render! [elem comp & params]
  ;; add new item to the queue
  (.push render-queue [elem comp params])

  ;; schedule render if required
  (when-not render-scheduled
    (set! render-scheduled true)
    (request-animation-frame actually-render)))
