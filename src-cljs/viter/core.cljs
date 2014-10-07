(ns viter.core
  (:require [viter.react  :as r]
            [viter.parser :as p]))

(deftype Component [config react-render]
  ILookup
  (-lookup [this k] (get config k))
  (-lookup [this k not-found] (get config k not-found))
  IFn
  (-invoke [this args rest]
    (react-render (js-obj "args" (assoc args :children rest)
                          "key" (:key args) ))
    ))

(defn create-component [name render config]
  "Creates component and registers it."
  (let [render (fn [& all] (p/html (apply render all)))
        config (assoc config :render render :displayName name)
        comp (->Component config (r/create-class config))]
    (p/register-component! name comp)
    comp
    ))

;; UTILS

(defn e-val [evt] (.-value (.-target evt)))

(defn render
  ([comp elem] (r/render (p/html comp) elem))
  ([comp] (render comp js/document.body)))
