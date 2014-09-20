(ns vita.app (:require [vita.log :as log]))

(log/info "hello again :)")

(def React js/React)
(def DOM (.-DOM React))
(def div (.-div (.-DOM React)))

(defn react-component [render]
  (let [config (if (map? render) render {:render render})
        default-config {
                        :shouldComponentUpdate
                        (fn [next-props]
                          (this-as this
                                   (not= (aget (.-props this) "args")
                                         (aget next-props "args"))))
                        :render
                        (fn []
                          (this-as this
                                   (apply (:render config) (aget (.-props this) "args"))
                                   ))
                        }]
    (->> config
         (#(merge % default-config))
         (clj->js)
         (.createClass React))
    ))

(defn create-component [render]
  (let [comp (react-component render)]
    (fn [& args] (comp #js {:args args}))
    ))

(def Root (create-component (fn [test other] (div {} "Hello World! " test other))))

(defn render [val] (.renderComponent React (Root val "!!!") js/document.body))
(def counter (atom 0))
(js/setInterval (fn []
                  (swap! counter inc)
                  (render @counter)
                  ) 1000)
