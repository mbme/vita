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

(defn split-tag [symbol]
  (let [[elem & classes] (str/split (name symbol) #"\.")
        class (str/join " " classes)]
    [elem class]))

(defn to-elem [name]
  (or (when-let [elem (get @components name)] [elem false])
      (when-let [elem (r/get-elem name)] [elem true])
      (throw (str "unknown element: " name))))

(defn replace-attr-aliases [attrs]
  (s/rename-keys attrs {:class    :className
                        :for      :htmlFor
                        :charset  :charSet}))

(defn normalize-form
  "Add attributes map to form if missing."
  [[attrs & more :as all]]
  (let [has-attrs (map? attrs)
        attrs (if has-attrs attrs {})
        rest (remove nil? (if has-attrs more all))]
    [attrs rest]))

(defn inject-comp-name [class comp-name]
  (if (nil? comp-name)
    class
    (str/replace class #"&" comp-name)))

(defn normalize-attrs [attrs static-class comp-name]
  (assoc attrs :class (-> (:class attrs)
                          (str " " static-class)
                          str/trim
                          (inject-comp-name comp-name))
         ))

(defn process-react-elem [tag attrs children]
  (let [js-attrs (-> attrs
                     utils/remove-empty-vals
                     replace-attr-aliases
                     clj->js)]
    (apply tag `[~js-attrs ~@children])
    ))

(defn process-custom-elem [tag attrs children]
  (apply tag [attrs children]))

(defn viter-form? [elem]
  (and
   (or (vector? elem) (list? elem))
   (keyword? (first elem))))

(defn html
  "Render React dom from viter form."
  ([body comp-name]
     (if (viter-form? body)
       (let [[elem-name class] (split-tag (first body))
             [attrs rest] (normalize-form (rest body))
             attrs (normalize-attrs attrs class comp-name)
             [elem is-native] (to-elem elem-name)
             comp-name (if is-native comp-name elem-name)
             children (map #(html % comp-name) rest)
             handler (if is-native process-react-elem process-custom-elem)]
         (handler elem attrs children))
       (clj->js body)))
  ([body] (html body nil)))
