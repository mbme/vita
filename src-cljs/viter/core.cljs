(ns viter.core
  (:require [viter.react  :as r]
            [viter.parser :as p]
            [viter.utils :as utils]))

(defn create-component [comp-name render config]
  "Creates component and registers it."
  (let [render (fn [conf] (let [rendered   (render conf)
                                elem       (name (first rendered))
                                elem+class (str elem "." comp-name)]
                            (p/html (cons (keyword elem+class) (rest rendered)) comp-name)))
        config (assoc config :render render :displayName comp-name)
        react-elem (r/create-elem config)
        comp (fn [args rest]
               (let [js-args (js-obj "args" (assoc config :children rest))
                     key     (:key args)]
                 (when-not (nil? key) (aset js-args "key" key))
                 (react-elem js-args)))]
    (p/register-component! comp-name comp)
    comp
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
