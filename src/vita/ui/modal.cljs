(ns vita.ui.modal
  (:require
   [viter :as v]
   [vita.utils.utils :as utils]
   [vita.utils.log :as log]))

(defonce ^:private modals (atom []))

(declare close)

(v/defc modal [{:keys [id body footer class click-close button-close]
                :or {click-close true button-close true}}]
  [:div.& {:onClick (utils/ev-handlers
                     ".modal-overlay" #(when click-close (close id))
                     "button"         #(close id)
                     ".close"         #(close id))}

   [:div.&-dialog {:class class}
    [:div
     [:div.&-content body]
     [:div.&-footer  footer]]]

   [:div.&-overlay]])

;; PUBLIC

(defn init! [elem]
  (add-watch
   modals :render
   (fn [_ _ _ modals]
     (v/render! (if (empty? modals)
                  [:div]
                  [modal (first modals)])
                elem))))

(defn show!
  "Show new modal dialog."
  [{:keys [id] :as props}]
  (when (nil? id) (throw "modal id must be specified"))
  (log/debug "showing modal %s" id)
  (swap! modals conj props))

(defn close
  "Close dialog with specified id."
  [id]
  (swap! modals
         (fn [modals] (remove #(= id (:id %)) modals))))

(defn clear! []
  (reset! modals []))
