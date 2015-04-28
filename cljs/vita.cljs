(ns vita
  (:require [core.state :as state]
            [core.socket :as socket]
            [utils]
            [core.bus :as bus]

            [ui.ws.workspace :as ws]
            [ui.search :as search]
            [ui.components :refer [spinner]]
            [ui.modal :as modal]

            [clojure.string :as string]

            [viter :as v]))

(defonce left (utils/q1 ".Root>.left"))
(defonce right (utils/q1 ".Root>.right"))
(defonce overlay (utils/q1 "body>.Overlay"))

(defn- show-no-connection []
  (bus/trigger :modal :no-connection
               {:click-close false
                :body
                [:div.no-connection
                 [:h2.message "NO CONNECTION"]
                 [spinner :size :big]]}))

;; delay check if socket connection established
(js/setTimeout #(when-not (socket/connected?)
                  (show-no-connection)) 1500)

;; (set! viter/*force-render* true)

(defn init! []
  (modal/init! overlay)

  ;; show :no-connection modal on broken websocket
  (bus/on :socket-closed show-no-connection)
  ;; and close it when connection appears
  (bus/on :socket-open   #(modal/close :no-connection)))

(defonce _
  (let [addr (-> js/window.location
                 (str "ws")
                 (string/replace-first #"^http" "ws"))]
    (init!)

    (state/install-handlers!)
    (state/watch!
     #(do
        (v/render! [search/SearchPanel %] left)
        (v/render! [ws/Workspace       %] right)))

    ;; render app first time
    (state/trigger-update!)

    (socket/connect! addr 5000)))
