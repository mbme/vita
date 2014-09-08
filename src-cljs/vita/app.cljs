(ns vita.app
  (:require [reagent.core :as reagent :refer [atom]]
            [vita.log :as log]))

(def root (.getElementById js/document "main"))

(log/info "test! %s" 23)
(reagent/render-component [:h1 "HELLO MBME!"] root)
