(ns vita.viter
  (:require [clojure.walk :as w]
            [clojure.set :as s]))

(def attr-aliases {"class" "className"
                   "for" "htmlFor"
                   "charset" "charSet"})

(defn prepare-attrs [attrs]
  (-> (w/stringify-keys attrs)
      (s/rename-keys attr-aliases)
      (clj->js)))

(defn normalize-form [[first second & rest :as form]]
  (if (map? second)
    form
    (into [first {} second] rest)))

(defn to-elem [symbol]
  (aget (.-DOM js/React) (name symbol)))

(defn html [body]
  (if (or (vector? body) (list? body))
    (let [[first second & rest] (normalize-form body)
          func (to-elem first)
          attrs (prepare-attrs second)
          forms (into [attrs] (map html rest))]
      (apply func forms))
    body))

(defn html-str [body]
  (str (html body)))
