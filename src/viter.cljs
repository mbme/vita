(ns viter
  (:require-macros viter)
  (:require
   [clojure.string :as str]

   [viter.react :as react]
   [viter.parser :refer [to-vDOM]]))

(defn- get-args [obj] (aget obj "args"))

(defn- try-to-run [func & rest]
  (when func (apply func rest)))

(defn- with-this [method]
  #(this-as this (try-to-run method this)))

(defn- create-react-element
  "Create new ReactElement."
  [{:keys [displayName render
           will-mount
           did-mount
           did-update
           will-unmount]}]
  (->
   #js {:shouldComponentUpdate
        (fn [next-props]
          (this-as this
                   (not= (get-args (.-props this))
                         (get-args next-props))))

        :render
        (fn []
          (this-as this
                   (let [args (get-args (.-props this))
                         rendered   (render args this)]
                     (to-vDOM rendered displayName true))))

        :componentWillMount    (with-this  will-mount)
        :componentDidMount     (with-this  did-mount)
        :componentDidUpdate    (with-this  did-update)
        :componentWillUnmount  (with-this  will-unmount)}
   react/create-class
   react/create-factory))


(def ^:private render-queue #js [])
(def ^:private render-scheduled false)

(defn- actually-render []
  ;; render all queued items
  (.forEach render-queue
            (fn [[react-elem elem]]
              (react/render react-elem elem)))

  ;; remove all items from queue
  (aset render-queue "length" 0)

  (set! render-scheduled false))


;; PUBLIC

(defn create-component
  "Creates viter component."
  [comp-name render config]
  (let [comp (create-react-element
              (assoc config
                     :render render
                     :displayName comp-name))]
    ;; add some metadata to identify viter components
    (with-meta
      (fn [args]
        (let [js-args (js-obj "args" args)
              key     (:key args)]

          ;; add key attribute to react element properties if passed
          (when-not (nil? key)
            (aset js-args "key" key))

          (comp js-args)))

      {:type :viter
       :name comp-name})))

(def request-animation-frame
  (or (.-requestAnimationFrame js/window)
      (.-mozRequestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      (.-msRequestAnimationFrame js/window)
      (fn [f] (.setTimeout js/window f 16))))

(defn render! [form elem]
  ;; add new item to the queue
  (.push render-queue [(to-vDOM form nil true) elem])

  ;; schedule render if required
  (when-not render-scheduled
    (set! render-scheduled true)
    (request-animation-frame actually-render)))

;; UTILS

(defn get-ref [this ref]
  (aget (.-refs this) ref))

(defn get-node [el]
  (.getDOMNode el))

(defn deref-node
  "Get react node by ref."
  [this ref]
  (get-node (get-ref this ref)))

(defn e-val
  "Get value from react event."
  [evt] (.-value (.-target evt)))
(defn get-words [s]
  (str/split s #"\s+"))

(defn join [col]
  (str/join " " col))

(defn echo [v] (println v) v)
