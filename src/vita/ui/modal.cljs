(ns vita.ui.modal
  (:require [com.JQuery]
            [viter :as v]))

(defonce ^:private modals (atom []))

(def ^:private $body (js/$ "body"))

(defn- validate-overlay []
  (if (empty? @modals)
    (.removeClass $body "modal-open")
    (.addClass    $body "modal-open")))

(v/defc modal [{:keys [body footer dialog-class]}]
  [:div

   [:div.&-dialog {:class dialog-class}
    `[:div.&-content ~@body]
    (when-not (nil? footer)
      `[:div.&-footer  ~@footer])]

   [:div.&-overlay]]

  :did-mount
  #(validate-overlay)

  :will-unmount
  #(validate-overlay))

(defn show!
  "Show new modal dialog."
  [props]
  (swap! modals conj props))

(defn init! [elem]
  (add-watch modals :render
             (fn [_ _ _ data] (v/render! [modal (last data)] elem))))
