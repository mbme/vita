(ns vita.app
  (:require [vita.base.state :as state]
            [vita.base.socket :as socket]
            [vita.utils.utils :as utils]
            [vita.base.bus :as bus]

            [vita.ui.workspace :as ws]
            [vita.ui.search :as search]
            [vita.ui.components :refer [spinner]]
            [vita.ui.modal :as modal]

            [viter :as v]))

(defonce left (utils/query ".Root>.left"))
(defonce right (utils/query ".Root>.right"))
(defonce overlay (utils/query "body>.Overlay"))

(defn- show-no-connection []
  (modal/show!
   {:id :no-connection
    :click-close false
    :body
    [:div.no-connection
     [:h2.message "NO CONNECTION"]
     [spinner :size :big]]}))


(js/setTimeout #(when-not (socket/connected?)
                  (show-no-connection)) 1500)

(defonce _
  (do
    (modal/init! overlay)

    ;; NO CONNECTION MODAL
    (bus/on :socket-open #(modal/close :no-connection))
    (bus/on :socket-closed show-no-connection)

    (state/watch!
     #(do
        (v/render! [search/SearchPanel %] left)
        (v/render! [ws/Workspace       %] right)))

    ;; render app first time
    (state/trigger-update!)

    (socket/connect! "ws://test.dev:8081/ws" 5000)))
