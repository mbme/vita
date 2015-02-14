(ns viter
  (:require-macros viter)
  (:require
   [clojure.string :as str]

   [viter.elements :refer [register-component!]]
   [viter.parser :refer [html]]
   [viter.react :refer [React]]))

(defn- get-args [obj] (aget obj "args"))

(defn- try-to-run [func & rest]
  (when func (apply func rest)))

(defn- with-this [method]
  #(this-as this (try-to-run method this)))

(defn- create-elem [{:keys [displayName
                            render
                            will-mount
                            did-mount
                            did-update
                            will-unmount]}]
  (->>
   {:shouldComponentUpdate
    (fn [next-props]
      (this-as this
               (not= (get-args (.-props this))
                     (get-args next-props))))

    :render
    (fn []
      (this-as this
               (let [args (get-args (.-props this))
                     rendered   (render args this)]
                 (html rendered displayName true))))

    :componentWillMount    (with-this  will-mount)
    :componentDidMount     (with-this  did-mount)
    :componentDidUpdate    (with-this  did-update)
    :componentWillUnmount  (with-this  will-unmount)}
   (clj->js)
   (.createClass React)
   (.createFactory React)))


(def ^:private render-queue #js [])
(def ^:private render-scheduled false)

(defn- render-item [[elem comp params]]
  (.render React (apply comp params) elem))

(defn- actually-render []
  ;; render all queued items
  (.forEach render-queue render-item)

  ;; remove all items from queue
  (aset render-queue "length" 0)

  (set! render-scheduled false))


;; PUBLIC

(defn create-component
  "Creates and registers viter component."
  [comp-name render config]
  (let [config     (assoc config
                          :render render
                          :displayName comp-name)
        react-elem (create-elem config)]
    (register-component!
     comp-name (fn [args rest]
                 (let [js-args (js-obj "args" (assoc args :children rest))
                       key     (:key args)]

                   ;; add key attribute to react element properties if passed
                   (when-not (nil? key) (aset js-args "key" key))

                   (react-elem js-args))))))

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

(def request-animation-frame
  (or (.-requestAnimationFrame js/window)
      (.-mozRequestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      (.-msRequestAnimationFrame js/window)
      (fn [f] (.setTimeout js/window f 16))))

(defn render! [elem comp & params]
  ;; add new item to the queue
  (.push render-queue [elem comp params])

  ;; schedule render if required
  (when-not render-scheduled
    (set! render-scheduled true)
    (request-animation-frame actually-render)))

;; UTILS

(defn get-words [s]
  (str/split s #"\s+"))

(defn join [col]
  (str/join " " col))

(defn echo [v] (println v) v)
