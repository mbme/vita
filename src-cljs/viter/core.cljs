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

(defn create-component [comp-name render config]
  "Creates component and registers it."
  (let [render (fn [conf] (let [rendered   (render conf)
                                elem       (name (first rendered))
                                elem+class (str elem "." comp-name)]
                            (p/html (cons (keyword elem+class) (rest rendered)))
                            ))
        config (assoc config :render render :displayName comp-name)
        comp (->Component config (r/create-class config))]
    (p/register-component! comp-name comp)
    comp
    ))

;; UTILS

(defn e-val [evt] (.-value (.-target evt)))

(defn render
  ([comp elem] (r/render (p/html comp) elem))
  ([comp] (render comp js/document.body)))
