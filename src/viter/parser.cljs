(ns viter.parser
  (:require [viter.react    :as react]

            [clojure.string :as str]
            [clojure.set    :as set]))

(defn- split-tag
  "Extract tag name and classes from keyword."
  [symbol]
  (let [[elem & classes] (str/split (name symbol) #"\.")
        class (str/join " " classes)]
    [elem class]))

(defn- replace-attr-aliases [attrs]
  (set/rename-keys attrs {:class    :className
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

(defn- normalize-attrs [attrs static-class comp-name]
  (assoc attrs
         :class (-> (:class attrs)
                    normalize-class
                    (str " " static-class)
                    (inject-comp-name comp-name)
                    str/trim)))

(defn- empty-val? [v]
  (or (nil? v) (str/blank? v)))

(defn- remove-empty-vals [m]
  (into {} (remove (comp empty-val? val) m)))

(defn- viter-comp?
  "Checks if function is viter component."
  [func]
  (= (:type (meta func)) :viter))

(defn- proces-native
  "Process native element form."
  [form comp-name]
  (let [[elem-name class] (split-tag (first form))
        [attrs rest] (normalize-form (rest form))
        attrs (normalize-attrs attrs class comp-name)

        elem     (react/get-elem elem-name)
        children (map #(to-vDOM % comp-name) rest)

        js-attrs (-> (remove-empty-vals attrs)
                     replace-attr-aliases
                     clj->js)]
    (apply elem `[~js-attrs ~@children])))

(defn- process-custom
  "Process custom viter form."
  [form comp-name]
  (let [comp (first form)
        ;; read component name from metadata
        comp-name (:name (meta comp))
        attrs (->
               ;; if second parameter is map then we can assume
               ;; that this is attributes map
               (if (map? (second form))
                 (second form)
                 (apply hash-map (rest form)))

               ;; add component name to classes
               (normalize-attrs "" comp-name))]
    (comp attrs)))

(defn to-vDOM
  "Build React Virtual DOM from viter forms."
  [form comp-name]
  (if (sequential? form)
    (cond
      (viter-comp? (first form)) (process-custom form comp-name)
      (keyword? (first form))    (proces-native  form comp-name)
      :else (clj->js form))
    (clj->js form)))
