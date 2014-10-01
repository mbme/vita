(ns vita.viter
  (:require [clojure.walk :as w]
            [clojure.set :as s]
            [clojure.string :as str]))

;; From Weavejester's Hiccup, via pump:
;; Regular expression that parses a CSS-style id and class from a tag name.
(def re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(defn split-tag [symbol]
  (->> (name symbol)
       (re-matches re-tag)
       next))

(def attr-aliases {"class" "className"
                   "for" "htmlFor"
                   "charset" "charSet"})

(defn replace-attr-aliases [attrs]
  (s/rename-keys attrs attr-aliases))

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
