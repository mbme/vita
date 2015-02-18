(ns vita.app
  (:require [vita.base.state :as state]
            [vita.base.socket :as socket]
            [vita.utils.utils :as utils]

            [vita.ui.workspace :as ws]
            [vita.ui.search :as search]
            [vita.ui.components :refer [spinner]]
            [vita.ui.modal :as modal]

            [viter :as v]))

(defonce _
  (let [left  (utils/query ".Root>.left")
        right (utils/query ".Root>.right")
        overlay (utils/query ".overlay")]

    (modal/init! overlay)

    (state/watch!
     #(do
        (v/render! [search/SearchPanel %] left)
        (v/render! [ws/Workspace       %] right)

        (when-not (:connected %)
          (modal/show!
           {:dialog-class "no-connection"
            :body [[:h2.message "NO CONNECTION"]
                   [spinner :size :big]]}))
        ))

    (socket/connect! "ws://test.dev:8081/ws" 5000)))
