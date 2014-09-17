(ns vita.app (:require [vita.log :as log]))

(log/info "hello again :)")

(def React js/React)
(def DOM (.-DOM React))
(def div (.-div (.-DOM React)))
(defn component [config]
  (.createClass React (clj->js config)))

(def Root (component {
                      :render #(div {} "Hello World!")
                      }))

(defn render [] (.renderComponent React (Root) js/document.body))
(render)
