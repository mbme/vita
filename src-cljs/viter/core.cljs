(ns viter.core
  (:require [clojure.set     :as  s]
            [clojure.string  :as  str]))

(def React js/React)

;; From Weavejester's Hiccup, via pump:
;; Regular expression that parses a CSS-style id and class from a tag name.
(def re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(def components (atom {}))
(defn register-component! [name comp]
  (when (get @components name)
    (throw (str "duplicate component definition: " name)))
  (swap! components assoc name comp))

(defn split-tag [symbol]
  (->> (name symbol)
       (re-matches re-tag)
       next))

(defn replace-attr-aliases [attrs]
  (s/rename-keys attrs {:class :className
                        :for :htmlFor
                        :charset :charSet}))

(defn get-words [s]
  (str/split s #"\s+"))

(defn cleanup-classes [& classes]
  (->> (map get-words classes)
       (apply concat)
       set
       (str/join " ")))

(defn remove-empty [m res]
  (into res (remove empty? m)))

(defn prepare-attrs
  "Cleanup and adjust attributes map."
  [{:keys [id class] :as attrs} static-id static-class]
  (let [el-id    (or id static-id)
        el-class (cleanup-classes class static-class)]
    (-> attrs
        (assoc :id el-id :class el-class)
        (remove-empty {})
        replace-attr-aliases)
    ))

(defn to-react-elem [name]
  (aget (.-DOM js/React) name))

(defn to-component [name]
  (get @components name))

(defn to-elem [name]
  (or (when-let [elem (to-component name)] [elem false])
      (when-let [elem (to-react-elem name)] [elem true])
      (throw (str "unknown element: " name))))

(defn normalize-form
  "Add attributes map to form if missing."
  [[first second & rest]]
  (if (map? second)
    [first second rest]
    [first {} (into [second] rest)]))

(defn prepare-form
  "Prepare viter form for rendering."
  [[raw-tag raw-attrs forms]]
  (let [[tag-name id class] (split-tag raw-tag)
        [tag is-native] (to-elem tag-name)
        attrs (prepare-attrs raw-attrs id class)]
    [tag (if is-native (clj->js attrs) attrs) forms]))

(defn viter-form? [elem]
  (and
   (or (vector? elem) (list? elem))
   (keyword? (first elem))
   ))

(defn to-js [elem]
  (cond (keyword? elem) (name elem)
        (symbol? elem) (str elem)
        (coll? elem) (clj->js elem)
        :else elem))

(defn html
  "Render React dom from viter form."
  [body]
  (if (viter-form? body)
    (let [[tag attrs forms]
          (->> (remove nil? body)
               normalize-form
               prepare-form)]
      (apply tag (into [attrs] (map html forms))))
    (to-js body)))

(defn- get-args [obj] (aget obj "args"))
(defn- react-class [config]
  (->> {:shouldComponentUpdate
        (fn [next-props] (this-as this
                                  (not= (get-args (.-props this))
                                        (get-args next-props)
                                        )))

        ;; wrapper for the plain `render' function
        :render
        (fn [] (this-as this
                        (let [render (:render config)
                              args (get-args (.-props this))]
                          (html (render args)))
                        ))}
       (merge config)
       (clj->js)
       (.createClass React)))

(defrecord Component [config react-render]
  IFn
  (-invoke [this args & rest]
    ;; TODO check if really need this
    (react-render #js {:args (assoc args :children rest)})
    ))

(extend-protocol ILookup
  Component
  (-lookup [comp k] (get comp/config k))
  (-lookup [comp k not-found] (get comp/config k not-found)))

(defn create-component [config]
  "Creates component and registers it."
  (let [name (:displayName config)
        comp (->Component config (react-class config))]
    (register-component! name comp)
    comp
    ))

;; UTILS

(defn e-val [evt] (.-value (.-target evt)))

(defn render
  ([comp elem] (.renderComponent React (html comp) elem))
  ([comp] (render comp js/document.body)))
