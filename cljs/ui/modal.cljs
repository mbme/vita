(ns ui.modal
  (:require
   [viter :as v :refer-macros [defc]]
   [utils]
   [core.bus :as bus]
   [core.log :as log]))

(def ^:private modals (atom []))

(defn close
  "Close dialog with specified id."
  [id]
  (swap! modals
         (fn [modals] (remove #(= id (:id %)) modals))))


(defc modal
  [{:keys [id body footer class click-close button-close]
    :or {click-close true button-close true}}]
  [:div.& {:onClick (utils/delegate
                     ".modal-overlay" #(when click-close (close id))
                     "button"         #(close id)
                     ".close"         #(close id))}

   [:div.&-dialog {:class class}
    [:div
     [:div.&-content body]
     [:div.&-footer  footer]]]

   [:div.&-overlay]])


;; listen to :modal events and add new modal to stack
(bus/on :modal (fn [id config]
                 (log/debug "showing modal %s" id)
                 (swap! modals conj config)))

;; PUBLIC

(defn init! [elem]
  (add-watch
   modals :render
   (fn [_ _ _ modals]
     (v/render! (if (empty? modals)
                  [:div]
                  [modal (first modals)])
                elem))))
