(ns viter.parser
  (:require [viter.react :as r]
            [viter.utils :as utils]
            [clojure.string  :as  str]
            [clojure.set     :as  s]))

;; map of registered Component instances
(def components (atom {}))

(defn register-component! [name comp]
  (when (get @components name)
    (throw (str "duplicate component definition: " name)))
  (swap! components assoc name comp))

;; From Weavejester's Hiccup, via pump:
;; Regular expression that parses a CSS-style id and class from a tag name.
(def re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

;; TODO better tag parsing
(defn split-tag [symbol]
  (let [[tag id classes](->> (name symbol)
                             (re-matches re-tag)
                             next)]
    [tag id (str/replace (or classes "") #"\." " ")]
    ))

(defn to-elem [name]
  (or (when-let [elem (get @components name)] [elem false])
      (when-let [elem (r/get-elem name)] [elem true])
      (throw (str "unknown element: " name))))

(defn replace-attr-aliases [attrs]
  (s/rename-keys attrs {:class    :className
                        :for      :htmlFor
                        :charset  :charSet}))

(defn viter-form? [elem]
  (and
   (vector? elem)
   (keyword? (first elem))))

(defn to-js [elem]
  (cond (keyword? elem) (name elem)
        (symbol? elem) (str elem)
        (coll? elem) (clj->js elem)
        :else elem))

(defn normalize-form
  "Add attributes map to form if missing."
  [elem [attrs & more :as all] id class]
  (let [has-attrs (map? attrs)
        attrs (if has-attrs attrs {})
        final-attrs (assoc attrs
                      ;; concat classes
                      :class (str/trim (str class " " (:class attrs)))
                      ;; if not id in attrs then use passed id
                      :id (or (:id attrs) id))
        rest (remove nil? (if has-attrs more all))]
    [elem final-attrs rest]))

(defn process-react-elem [tag attrs children]
  (let [js-attrs (-> attrs
                     utils/remove-empty-vals
                     replace-attr-aliases
                     clj->js)]
    (apply tag `[~js-attrs ~@children])
    ))

(defn process-custom-elem [tag attrs children]
  (apply tag `[~attrs ~@children]))

(defn html
  "Render React dom from viter form."
  [body]
  (if (viter-form? body)
    (let [[elem-name id class] (split-tag (first body))
          [elem is-native] (to-elem elem-name)
          [elem attrs rest] (normalize-form elem (rest body) id class)
          children (map html rest)
          handler (if is-native
                    process-react-elem
                    process-custom-elem)]
      (handler elem attrs children))
    (to-js body)))
