(ns viter
  (:require-macros viter)
  (:require
   [viter.react  :as    react]
   [viter.parser :refer [to-vDOM]]))

;; RENDER QUEUE

(def ^:private render-queue (volatile! []))

(defn- render
  "Render all queued items."
  []
  (let [queue @render-queue]
    ;; remove all items from queue
    (vreset! render-queue [])
    (doseq [item queue]
      (if (vector? item)
        ;; if vector then it's component and node to mount
        (apply react/render item)
        ;; else it's component to re-render
        (when (.isMounted item)
          ;; re-render only mounted components
          (.forceUpdate item))))))

(def request-animation-frame
  (or (.-requestAnimationFrame js/window)
      (.-mozRequestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      (.-msRequestAnimationFrame js/window)
      (fn [f] (.setTimeout js/window f 16))))

(defn- schedule-render
  "Schedule render if required."
  []
  (when (empty? @render-queue)
    (request-animation-frame render)))

(defn render!
  ([form elem]
   (schedule-render)
   ;; add new item to the queue
   (vswap! render-queue
           conj [(to-vDOM form nil) elem]))
  ([component]
   (schedule-render)
   (vswap! render-queue
           conj component)))

(defn node [this]
  (react/get-node this))

;; REACT COMPONENT

(def *force-render* false)

(defn- create-react-element
  "Create new ReactElement."
  [displayName render init]
  (->
   #js {:displayName displayName

        :callbacks {}
        :localState (atom nil)

        :shouldComponentUpdate
        (fn [next-props]
          (or
           *force-render*
           (this-as this
                    (not= (aget this "props" "props")
                          (aget next-props   "props")))))

        :render
        (fn []
          (this-as this
                   (let [props    (aget this "props" "props")
                         state    (aget this "localState")
                         rendered (render props state)]
                     (to-vDOM rendered displayName))))

        :componentWillMount
        (fn []
          (this-as this
                   (let [state (aget this "localState")]
                     (when init (aset this "callbacks" (init state)))
                     (add-watch state :render #(render! this)))))

        :componentDidMount
        (fn []
          (this-as this
                   (when-let [cb (:did-mount (aget this "callbacks"))]
                     (cb (node this)))))

        :componentWillUpdate
        (fn []
          (this-as this
                   (when-let [cb (:will-update (aget this "callbacks"))]
                     (cb (node this)))))

        :componentDidUpdate
        (fn []
          (this-as this
                   (when-let [cb (:did-update (aget this "callbacks"))]
                     (cb (node this)))))

        :componentWillUnmount
        (fn []
          (this-as this
                   (when-let [cb (:will-unmount (aget this "callbacks"))]
                     (cb (node this)))))}

   react/create-class
   react/create-factory))


;; PUBLIC

(defn create-component
  "Creates viter component."
  [comp-name render init]
  (let [element (create-react-element comp-name render init)]

    ;; add some metadata to identify viter components
    (with-meta

      (fn component
        ;; this allows to call component with list of params
        ([k v & rest]
         (-> (apply hash-map rest)
             (assoc k v)
             component))
        ([{:keys [key] :or {key js/undefined} :as props}]
         ;; add key attribute to react element properties if passed
         (element (js-obj "props" props "key" key))))

      {:type :viter
       :name comp-name})))
