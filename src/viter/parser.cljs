(ns viter.parser
  (:require [viter.react    :as react]

            [clojure.string :as str]
            [clojure.set    :as set]))

;; TODO maybe add tag line validation
(defn- split-tag-line [tag-line]
  (-> tag-line
      ;; add space before . and #
      (str/replace #"(\.|#)" " $1")
      str/triml
      (str/split " ")))

(defn- parse-tag-line-item [item]
  (case (first item)
    "." [:class (.substring item 1)]
    "#" [:id    (.substring item 1)]
    [:elem item]))

(defn- replace-attr-aliases [attrs]
  (set/rename-keys attrs {:class    :className
                          :for      :htmlFor
                          :charset  :charSet}))

(defn- normalize-form
  "Add attributes map to form if missing."
  [[attrs & more :as all]]
  (if (map? attrs) ;; if has attrs
    [attrs (remove nil? more)]
    [{}    (remove nil? all)]))

(defn- inject-comp-name
  "Replace & in class with current component name."
  [comp-name class]
  (if (nil? comp-name)
    class
    (str/replace class #"&" comp-name)))

(defn- normalize-class-attr [class]
  (if (map? class)
    (for [[k v] class :when v] (name k))
    [class]))

(defn- build-class [class-attr static-classes comp-name]
  (->> (normalize-class-attr class-attr)
       (concat static-classes)
       (str/join " ")
       (inject-comp-name comp-name)))

(defn- empty-val? [v]
  (or (nil? v) (str/blank? v)))

(defn- remove-empty-vals [m]
  (into {} (remove (comp empty-val? val) m)))

(defn- viter-comp?
  "Checks if function is viter component."
  [func]
  (= (:type (meta func)) :viter))

(declare parse-tag-line)
(declare to-vDOM)

(defn- proces-native
  "Process native element form."
  [form comp-name]
  (let [
        {:keys [elem classes]} (parse-tag-line (name (first form)))
        [attrs params] (normalize-form (rest form))
        js-attrs (->>
                  (build-class (:class attrs) classes comp-name)
                  (assoc attrs :class)
                  remove-empty-vals
                  replace-attr-aliases
                  clj->js)

        elem     (react/get-elem elem)
        children (map #(to-vDOM % comp-name) params)]

    (apply elem `[~js-attrs ~@children])))

(defn- process-custom
  "Process custom viter form."
  [form comp-name]
  (let [comp (first form)
        attrs (if (map? (second form))
                (second form)
                (apply hash-map (rest form)))

        class (build-class (:class attrs) nil comp-name)]

    (comp (assoc attrs :class class))))

;; PUBLIC

(defn parse-tag-line
  "Extract element name, id and classes from tag line."
  [tag-line]
  (let [res (js-obj "elem" nil
                    "id" nil
                    "classes" (array))]
    (->>
     (split-tag-line tag-line)
     (map parse-tag-line-item)
     (map
      (fn [[type elem]]
        (case type
          :elem  (aset res "elem" elem)
          :id    (aset res "id" elem)
          :class (.push (aget res "classes") elem))))
     doall)

    (js->clj res :keywordize-keys true)))

(defn to-vDOM
  "Build React Virtual DOM from viter forms."
  [form comp-name]
  (if (sequential? form)
    (cond
      (viter-comp? (first form)) (process-custom form comp-name)
      (keyword? (first form))    (proces-native  form comp-name)
      :else (clj->js form))
    (clj->js form)))
