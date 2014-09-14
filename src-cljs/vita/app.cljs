(ns vita.app
  (:require [vita.log :as log]
            [vita.generator :as gen]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            ))

(defonce state (atom {
                      :records (gen/random-records 10)}
                     ))


(q/defcomponent Record [{:keys [name data]}]
  (d/div {:className "record" :key (hash name)}
         (d/h2 {} name)
         (d/div {} data)
         ))

(q/defcomponent Root [records]
  (apply d/div {:className "records"}
         (map #(Record %) records)
         ))

(defn render [data]
  (q/render (Root (:records @data)) (.getElementById js/document "main")) )

;; listen for changes in state and call render
(add-watch state :render
           (fn [_ _ _ data] (render data)))
(render state)
