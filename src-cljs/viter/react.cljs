(ns viter.react)

(def React js/React)

(defn get-elem [name]
  (aget (.-DOM React) name))

(defn- get-args [obj] (aget obj "args"))

(defn create-class [config]
  (->> {:shouldComponentUpdate
        (fn [next-props] (this-as this
                                  (not= (get-args (.-props this))
                                        (get-args next-props)
                                        )))

        :render
        (fn [] (this-as this
                        (let [render (:render config)
                              args (get-args (.-props this))]
                          (render args))
                        ))}
       (merge config)
       (clj->js)
       (.createClass React)))

(defn render [comp elem]
  (.renderComponent React comp elem))
