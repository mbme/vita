(ns vita.app
  (:require [vita.base.state :as state]
            [vita.base.socket :as socket]
            [vita.utils.utils :as utils]

            [vita.ui.workspace :as ws]
            [vita.ui.search :as search]

            [viter.core :refer [render!]]))

(defonce _
  (let [left  (utils/query ".Root>.left")
        right (utils/query ".Root>.right")]

    (state/watch!
     #(do
        (render! left  search/SearchPanel %)
        (render! right ws/Workspace       %)))

    (socket/connect! "ws://test.dev:8081/ws" 5000)))
