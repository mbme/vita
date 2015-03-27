(ns vita.app
  (:require [vita.base.state :as state]
            [vita.base.socket :as socket]
            [vita.utils.utils :as utils]
            [vita.base.bus :as bus]

            [vita.ui.workspace :as ws]
            [vita.ui.search :as search]
            [vita.ui.components :refer [spinner]]
            [vita.ui.modal :as modal]

            [clojure.string :as string]

            [viter :as v]))

(defonce left (utils/q1 ".Root>.left"))
(defonce right (utils/q1 ".Root>.right"))
(defonce overlay (utils/q1 "body>.Overlay"))

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
  (let [addr (-> js/window.location
                 (str "ws")
                 (string/replace-first #"^http" "ws"))]

    (modal/init! overlay)

    ;; NO CONNECTION MODAL
    (bus/on :socket-open   #(modal/close :no-connection))
    (bus/on :socket-closed show-no-connection)

    (state/install-handlers!)
    (state/watch!
     #(do
        (v/render! [search/SearchPanel %] left)
        (v/render! [ws/Workspace       %] right)))

    ;; render app first time
    (state/trigger-update!)

    (socket/connect! addr 5000)))
