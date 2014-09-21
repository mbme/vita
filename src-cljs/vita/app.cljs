(ns vita.app (:require [vita.log :as log]
                       [vita.react :as r])
    (:require-macros [vita.react :refer [defc]]))

(log/info "hello again :)")

(defc Root [test other] [:div "Hello World! " test other] :componentDidMount #(println "AHAHHA!"))

(defn render [val] (.renderComponent r/React (Root val "!!!") js/document.body))
(def counter (atom 0))
(js/setInterval (fn []
                  (swap! counter inc)
                  (render @counter)
                  ) 1000)
