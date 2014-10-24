(ns viter.core
  (:require [viter.react  :as r]
            [viter.parser :as p]
            [viter.utils :as utils]))

(deftype Component [config react-render]
  ILookup
  (-lookup [this k] (get config k))
  (-lookup [this k not-found] (get config k not-found))
  IFn
  (-invoke [this args rest]
    (react-render (js-obj "args" (assoc args :children rest)
                          "key" (:key args) ))
    ))

(defn create-component [comp-name render config]
  "Creates component and registers it."
  (let [render (fn [conf] (let [rendered   (render conf)
                                elem       (name (first rendered))
                                elem+class (str elem "." comp-name)]
                            (p/html (cons (keyword elem+class) (rest rendered)) comp-name)
                            ))
        config (assoc config :render render :displayName comp-name)
        comp (fn [args rest] (render (js-obj "args" (assoc config :children rest) "key" (:key args))))]
    (p/register-component! comp-name comp)
    comp
    ))

;; UTILS

(defn e-val [evt] (.-value (.-target evt)))

(def ^:private render-data nil)
(def ^:private render-scheduled false)
(defn- actually-render []
  (utils/request-animation-frame actually-render)
  (let [[elem comp params] render-data]
    (r/render (apply comp params) elem)
    (set! render-scheduled false)))

(defn render! [elem comp & params]
  (set! render-data [elem comp params])
  (when-not render-scheduled
    (set! render-scheduled true)
    (utils/request-animation-frame actually-render)))
