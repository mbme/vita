(ns vita.ui.modal
  (:require
   [viter :as v]
   [vita.utils.utils :as utils]))

(defonce ^:private modals (atom []))

(defonce ^:private body js/document.body)

(v/defc modal [{:keys [body footer class]}]
  [:div.& {:onClick (utils/ev-handlers
                     ".modal-overlay" #(println "OVERLAY")
                     "button"         #(println "BUTTON"))}

   [:div.&-dialog {:class class}
    [:div.&-content body]
    [:div.&-footer  footer]]

   [:div.&-overlay]]

  :did-mount
  #(utils/add-class body "modal-open")

  :will-unmount
  #(utils/remove-class body "modal-open"))

;; PUBLIC

(defn init! [elem]
  (add-watch
   modals :render
   (fn [_ _ _ modals]
     (v/render! (if (empty? modals)
                  [:div]
                  [modal (last modals)])
                elem))))

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

(defn clear! []
  (reset! modals []))
