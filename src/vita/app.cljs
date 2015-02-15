(ns vita.app
  (:require [vita.base.state :as state]
            [vita.base.socket :as socket]
            [vita.utils.utils :as utils]

            [vita.ui.workspace :as ws]
            [vita.ui.search :as search]
            [vita.ui.components :refer [modal spinner]]

            [viter :as v]))

(v/defc NoConnectionWall []
  [:div
   [modal :class "center-align"
    :body
    [[:h2 "NO CONNECTION"]
     [spinner :size :big]]]])

(v/defc Overlays [{:keys [connected]}]
  [:div
   (when-not connected [NoConnectionWall])
   ])

(defonce _
  (let [left  (utils/query ".Root>.left")
        right (utils/query ".Root>.right")
        overlay (utils/query ".overlay")]

    (state/watch!
     #(do
        (v/render! [search/SearchPanel %] left)
        (v/render! [ws/Workspace       %] right)
        (v/render! [Overlays           %] overlay)))

    (socket/connect! "ws://test.dev:8081/ws" 5000)))
