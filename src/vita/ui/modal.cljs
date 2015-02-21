(ns vita.ui.modal
  (:require [viter :as v]))

(defonce ^:private modals (atom []))

(v/defc modal [{:keys [body footer]}]
  [:div.&

   [:div.&-dialog
    [:div.&-content body]
    [:div.&-footer  footer]]

   [:div.&-overlay]]

  :did-mount
  #(.add js/document.body.classList "modal-open")

  :will-unmount
  #(.remove js/document.body.classList "modal-open"))

;; PUBLIC

(defn show!
  "Show new modal dialog."
  [{:keys [id] :as props}]
  (when (nil? id) (throw "modal id must be specified"))
  (swap! modals conj props))

(defn close
  "Close dialog with specified id."
  [id]
  (swap! modals
         (fn [modals] (remove #(= id (:id %)) modals))))

(defn init! [elem]
  (add-watch
   modals :render
   (fn [_ _ _ modals]
     (v/render! (if (empty? modals)
                  [:div]
                  [modal (last modals)])
                elem))))

(defn clear! []
  (reset! modals []))
