(ns vita.app
  (:require [vita.base.state :as state]
            [vita.base.socket :as socket]
            [vita.utils.utils :as utils]

            [vita.ui.workspace :as ws]
            [vita.ui.search :as search]
            [vita.ui.components]

            [viter.core :as viter]))

(viter/defc NoConnectionWall []
  [:div
   [:modal.center-align
    [:h2 "NO CONNECTION!"]
    [:spinner {:active true :size :big}]]])

(viter/defc Overlays [{:keys [connected]}]
  [:div
   (when-not connected [:NoConnectionWall])
   ])

(defonce _
  (let [left  (utils/query ".Root>.left")
        right (utils/query ".Root>.right")
        overlay (utils/query ".overlay")]

    (state/watch!
     #(do
        (viter/render! left    search/SearchPanel %)
        (viter/render! right   ws/Workspace       %)
        (viter/render! overlay Overlays           %)))

    (socket/connect! "ws://test.dev:8081/ws" 5000)))
