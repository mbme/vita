(ns viter
  (:require-macros viter)
  (:require
   [clojure.string :as str]

   [viter.react :as react]
   [viter.parser :refer [to-vDOM]]))

(defn- get-args [obj] (aget obj "args"))

(defn- this-args [this]
  (get-args (.-props this)))

(defn- this-local-state [this]
  (.-localState this))

(defn- try-to-run [func & rest]
  (when func (apply func rest)))

(defn- with-this [method]
  #(this-as this (try-to-run method this)))

(def *force-render* false)

(defn- create-react-element
  "Create new ReactElement."
  [{:keys [displayName render
           will-mount
           did-mount
           will-update
           did-update
           will-unmount]}]
  (->
   #js {:displayName displayName

        :localState (atom {})

        :shouldComponentUpdate
        (fn [next-props]
          (or
           *force-render*
           (this-as this
                    (not= (this-args this)
                          (get-args next-props)))))

        :render
        (fn []
          (this-as this
                   (let [args     (this-args this)
                         rendered (render args this)]
                     (to-vDOM rendered displayName))))

        :componentWillMount   (with-this  will-mount)
        :componentDidMount    (with-this  did-mount)
        :componentWillUpdate  (with-this  will-update)
        :componentDidUpdate   (with-this  did-update)
        :componentWillUnmount (with-this  will-unmount)}
   react/create-class
   react/create-factory))


;; UTILS

(def request-animation-frame
  (or (.-requestAnimationFrame js/window)
      (.-mozRequestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      (.-msRequestAnimationFrame js/window)
      (fn [f] (.setTimeout js/window f 16))))

(defn get-ref [this ref]
  (aget (.-refs this) ref))

(defn get-node [this]
  (.getDOMNode this))

(defn deref-node
  "Get react node by ref."
  [this ref]
  (get-node (get-ref this ref)))

(defn e-target [evt]
  (.-target evt))

(defn e-val
  "Get value from react event."
  [evt] (.-value (e-target evt)))

(defn get-words [s]
  (str/split s #"\s+"))

(defn join [col]
  (str/join " " col))

(defn echo [v] (println v) v)

(defn echol [v] (js/console.log v) v)

;; PUBLIC

(defn create-component
  "Creates viter component."
  [comp-name render config]
  (let [element (-> config
                    (assoc :displayName comp-name)
                    (assoc :render render)
                    create-react-element)]

    ;; add some metadata to identify viter components
    (with-meta

      (fn component
        ;; this allows to call component with list of params
        ([k v & rest]
         (-> (apply hash-map rest)
             (assoc k v)
             component))
        ([{:keys [key] :or {key js/undefined} :as args}]
         ;; add key attribute to react element properties if passed
         (element (js-obj "args" args "key" key))))

      {:type :viter
       :name comp-name})))

(def ^:private render-queue (volatile! []))

(defn- render
  "Render all queued items."
  []
  (let [queue @render-queue]
    ;; remove all items from queue
    (vreset! render-queue [])
    (doseq [[react-elem elem] queue]
      (react/render react-elem elem))))

(defn render! [form elem]
  ;; schedule render if required
  (when (empty? @render-queue)
    (request-animation-frame render))

  ;; add new item to the queue
  (vswap! render-queue
          conj [(to-vDOM form nil) elem]))
