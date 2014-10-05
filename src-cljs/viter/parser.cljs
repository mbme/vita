(ns viter.parser
  (:require [viter.react :as r]
            [clojure.string  :as  str]
            [clojure.set     :as  s]))

;; map of registered Component instances
(def components (atom {}))

(defn register-component! [name comp]
  (when (get @components name)
    (throw (str "duplicate component definition: " name)))
  (swap! components assoc name comp))


(defn normalize-form
  "Add attributes map to form if missing."
  [[first second & rest]]
  (if (map? second)
    [first second rest]
    [first {} (into [second] rest)]))

;; From Weavejester's Hiccup, via pump:
;; Regular expression that parses a CSS-style id and class from a tag name.
(def re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(defn split-tag [symbol]
  (->> (name symbol)
       (re-matches re-tag)
       next))

(defn to-component [name]
  (get @components name))

(defn to-elem [name]
  (or (when-let [elem (to-component name)] [elem false])
      (when-let [elem (r/get-elem name)] [elem true])
      (throw (str "unknown element: " name))))


(defn get-words [s]
  (str/split s #"\s+"))

(defn cleanup-classes [& classes]
  (->> (map get-words classes)
       (apply concat)
       set
       (str/join " ")))

(defn remove-empty [m]
  (into {} (for [[k v] m :when (not (str/blank? v))] [k v])))

(defn replace-attr-aliases [attrs]
  (s/rename-keys attrs {:class :className
                        :for :htmlFor
                        :charset :charSet}))

(defn prepare-attrs
  "Cleanup and adjust attributes map."
  [{:keys [id class] :as attrs} static-id static-class]
  (let [el-id    (or id static-id)
        el-class (cleanup-classes class static-class)]
    (-> attrs
        (assoc :id el-id :class el-class)
        remove-empty
        replace-attr-aliases)
    ))

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
