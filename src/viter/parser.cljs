(ns viter.parser
  (:require [viter.elements :refer [get-elem]]
            [viter.utils :as utils]
            [clojure.string  :as  str]
            [clojure.set     :as  s]))

(defn- split-tag [symbol]
  (let [[elem & classes] (str/split (name symbol) #"\.")
        class (str/join " " classes)]
    [elem class]))

(defn- replace-attr-aliases [attrs]
  (s/rename-keys attrs {:class    :className
                        :for      :htmlFor
                        :charset  :charSet}))

(defn- normalize-form
  "Add attributes map to form if missing."
  [[attrs & more :as all]]
  (let [has-attrs (map? attrs)
        attrs (if has-attrs attrs {})
        rest (remove nil? (if has-attrs more all))]
    [attrs rest]))

(defn- inject-comp-name
  "Replace & in class with current component name."
  [class comp-name]
  (if (nil? comp-name)
    class
    (str/replace class #"&" comp-name)))

(defn- normalize-class [class]
  (if (map? class)
    (str/join " " (for [[k v] class :when v] (name k)))
    class))

(defn- normalize-attrs [attrs static-class comp-name add-top-class]
  (assoc attrs
         :class (-> (:class attrs)
                    normalize-class
                    (str " " static-class (when add-top-class " &"))
                    str/trim
                    (inject-comp-name comp-name))))

(defn- process-react-elem [tag attrs children]
  (let [js-attrs (-> (utils/remove-empty-vals attrs)
                     replace-attr-aliases
                     clj->js)]
    (apply tag `[~js-attrs ~@children])))

(defn- process-custom-elem [tag attrs children]
  (apply tag [attrs children]))

(defn- viter-form?
  "Check if passed data structure is viter form."
  [elem]
  (and
   (or (vector? elem) (list? elem))
   (keyword? (first elem))))

(defn html
  "Render React dom from viter form.
  `comp-name' is current viter component name."
  ([body comp-name is-top]
   (if (viter-form? body)
     (let [[elem-name class] (split-tag (first body))
           [attrs rest] (normalize-form (rest body))
           attrs (normalize-attrs attrs class comp-name is-top)

           [elem is-native] (get-elem elem-name)

           ;; set comp-name to current component name to reuse in child components
           comp-name (if is-native comp-name elem-name)
           children (map #(html % comp-name false) rest)
           handler (if is-native process-react-elem process-custom-elem)]
       (handler elem attrs children))
     (clj->js body)))
  ([body] (html body nil false)))
