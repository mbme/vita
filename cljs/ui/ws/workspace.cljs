(ns ui.ws.workspace
  (:require [core.bus :as bus]
            [utils]
            [ui.components :refer [icon button Tabs]]
            [ui.ws.editor  :refer [RecordEditor]]
            [ui.ws.record  :refer [RecordView RecordPreviewer]]
            [ui.ws.files   :refer [FilesList]]

            [goog.style :as style]

            [viter :as v :refer-macros [defc]]))

(defn- scroll-to [el]
  (.scrollIntoView el)
  (utils/animate! el "target"))

(defn- modal-delete? [key]
  (bus/trigger
   :modal :delete-record
   {:class "delete-record"
    :body
    [:h2 "DELETE RECORD?"]
    :footer
    [:div.buttons
     [button :label "CANCEL"]
     [button :label "DELETE" :type :primary
      :onClick (fn [] (bus/trigger :ws-delete key))]]}))

(defn- ws-edit [{:keys [key id]} state]
  [:div.&.is-edited
   [:div.panel
    [button :label "SAVE" :class "&-save"
     :onClick (fn []
                (bus/trigger :ws-save @(:record @state))
                (swap! state assoc :edit false))]

    (if id
      ;; we cannot delete new record
      [button :label "DELETE" :class "&-delete"
       :onClick #(modal-delete? key)]
      ;; instead we can close it
      [button :label "CLOSE" :class "&-close"
       :onClick #(bus/trigger :ws-close key)])

    (when id
      [button :label "CANCEL" :class "&-cancel"
       :onClick #(swap! state assoc :edit false)])]

   [Tabs :items
    [{:label "WRITE"
      :body [RecordEditor :record (:record @state)]}

     {:label "PREVIEW"
      :body [RecordPreviewer :record (:record @state)]}

     {:label "FILES"
      :body [FilesList :record (:record @state)]}]]])

(defn- ws-show [props state]
  [:div.&.is-showed
   [:div.panel
    [button :label "EDIT" :class "&-edit"
     :onClick #(reset! state {:edit true :record (atom props)})]
    [button :label "CLOSE" :class "&-close"
     :onClick #(bus/trigger :ws-close (:key props))]]
   [RecordView props]])

(defc WorkspaceItem [props state]
  (if (:edit @state)
    (ws-edit props state)
    (ws-show props state))

  (fn [this state props]
    ;; edit new records (records without id) by default
    (reset! state {:edit (nil? (:id props))
                   :record (atom props)})

    (let [scroll-to-me #(scroll-to (v/node this))
          handler #(when (= % (:key props)) (scroll-to-me))]

      ;; scroll on every click on records info
      (bus/on :ws-open handler)
      {:did-mount     scroll-to-me ; scroll first time
       :will-unmount #(bus/off :ws-open handler)})))


(defc Workspace [{:keys [ws-items]}]
  [:div.&

   [button
    :class "&-new"
    :label [icon :type :plus]
    :type :floating
    :style :raised
    :large true
    :onClick #(bus/trigger :ws-new)]

   (map WorkspaceItem ws-items)]

  ;; fix workspace height on update to avoid redundant jumps
  {:will-update #(let [el (v/node %1)]
                   (style/setHeight el (.-height (style/getSize el))))
   :did-update  #(style/setHeight (v/node %1) "auto")})
