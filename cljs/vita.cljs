(ns vita
  (:require [core.state :as state]
            [core.socket :as socket]
            [utils :refer [q1]]
            [core.bus :as bus]

            [ui.ws.workspace :refer [Workspace]]
            [ui.search :refer [SearchPanel]]

            [ui.components :refer [spinner]]
            [ui.modal :as modal]

            [clojure.string :as string]

            [viter :as v]))

;; (set! v/*force-render* true)

;; NO CONNECTION MODAL

(defn- show-no-connection []
  (bus/trigger :modal :no-connection
               {:click-close false
                :body
                [:div.no-connection
                 [:h2.message "NO CONNECTION"]
                 [spinner :size :big]]}))

(modal/init! (q1 "body>.Overlay"))

;; show :no-connection modal on broken websocket
(bus/on :socket-closed show-no-connection)
;; and close it when connection appears
(bus/on :socket-open
        #(bus/trigger :modal-close :no-connection))

;; schedule first test if socket connection established
(js/setTimeout #(when-not (socket/connected?)
                  (show-no-connection)) 1500)


;; APP INIT

(let [left  (q1 ".Root>.left")
      right (q1 ".Root>.right")
      addr (-> js/window.location
               (str "ws")
               (string/replace-first #"^http" "ws"))]

  (state/watch!
   #(do
      (v/render! [SearchPanel %] left)
      (v/render! [Workspace   %] right)))

  ;; render app first time
  (state/trigger-update!)

  (socket/connect! addr 5000))
