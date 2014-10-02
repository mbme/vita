(ns viter.core
  (:require [clojure.walk :as w]
            [clojure.set :as s]
            [clojure.string :as str])
  (:require-macros [viter.core :as v]))

(def React js/React)
(def LIST (v/defc-list))

;; FIXME remove this logging
(enable-console-print!)
(println LIST)
(println (count LIST))

;; From Weavejester's Hiccup, via pump:
;; Regular expression that parses a CSS-style id and class from a tag name.
(def re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(defn split-tag [symbol]
  (->> (name symbol)
       (re-matches re-tag)
       next))

(defn replace-attr-aliases [attrs]
  (s/rename-keys attrs {"class" "className"
                        "for" "htmlFor"
                        "charset" "charSet"}))

(defn get-words [s]
  (str/split s #"\s+"))

(defn cleanup-classes [& classes]
  (->> (map get-words classes)
       (apply concat)
       set
       (str/join " ")))

(defn remove-empty [m res]
  (into res (remove (comp empty? val) m)))

(defn prepare-attrs
  "Cleanup and adjust attributes map."
  [{:keys [id class] :as attrs} static-id static-class]
  (let [el-id (if id id static-id)
        el-class (cleanup-classes class static-class)]
    (-> attrs
        (assoc :id el-id :class el-class)
        (remove-empty {})
        w/stringify-keys
        replace-attr-aliases
        clj->js)
    ))

(defn to-elem [name]
  (aget (.-DOM js/React) name))

(defn normalize-form
  "Add attributes map to form if missing."
  [[first second & rest]]
  (if (map? second)
    [first second rest]
    [first {} (into [second] rest)]))

(declare html)
(defn prepare-form
  "Prepare viter form for rendering."
  [[raw-tag raw-attrs raw-forms]]
  (let [[tag-name id class] (split-tag raw-tag)
        tag (to-elem tag-name)
        attrs (prepare-attrs raw-attrs id class)
        forms (map html raw-forms)]
    [tag attrs forms]
    ))

(defn html
  "Render React dom from viter form."
  [body]
  (if (or (vector? body) (list? body))
    (let [[tag attrs forms]
          (-> body
              normalize-form
              prepare-form)]
      (apply tag (into [attrs] forms)))
    body))

(defn html-str [body]
  (str (html body)))

(defn- get-args [obj] (aget obj "args"))
(defn- react-class [config]
  (->> {:shouldComponentUpdate
        (fn [next-props] (this-as this
                                  (not= (get-args (.-props this))
                                        (get-args next-props)
                                        )))

        ;; wrapper for the plain `render' function
        :render
        (fn [] (this-as this (let [render (:render config)
                                   args (get-args (.-props this))]
                               (html (apply render args)))
                        ))}
       (merge config)
       (clj->js)
       (.createClass React)))

(defrecord Component [config render]
  IFn
  (-invoke [this & args]
    (let [getKey (:getKey this)]
      (render #js {:args args
                   :key (when getKey (apply getKey args))}
              ))
    ))

(extend-protocol ILookup
  Component
  (-lookup [comp k] (get comp/config k))
  (-lookup [comp k not-found] (get comp/config k not-found)))

(defn create-component [config]
  (->Component config (react-class config)))

;; UTILS

(defn e-val [evt] (.-value (.-target evt)))

(defn render
  ([comp elem] (.renderComponent React comp elem))
  ([comp] (render comp js/document.body)))
