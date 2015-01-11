(ns vita.workspace
  (:require [vita.state :as s]
            [viter.core :as v :refer-macros [defc]]
            [viter.utils :as utils]
            [viter.react :refer [deref-node]]))

(defn scrollTo [elem container]
  (.animate container #js {:scrollTop (.-top (.offset elem))} 300))

(defc Record [{:keys [name data]}]
  [:div
   [:h3.&-name name]
   [:div.&-body {:dangerouslySetInnerHTML
                 {:__html (utils/md->html @data)}}]])

(defc RecordView [{:keys [key] :as record}]
  [:div [:div.panel
         [:span.panel-left
          [:icon.-pencil {:onClick #(s/trigger :ws-edit key)}]]
         [:span.panel-right
          [:icon.-close {:onClick #(s/trigger :ws-close key)}]]]
   [:Record record]])

(defc EditRecordView [{:keys [key name data]} this]
  [:div
   [:div.panel
    [:span.panel-left
     [:icon.-eye {:onClick #(s/trigger :ws-preview key)}]]
    [:span.panel-right
     [:icon.-save {:onClick
                   #(do (s/update-record key :data @data)
                        (s/ws-sync-record key)
                        (s/ws-view-record key))}]
     [:icon.-close {:onClick #(s/trigger :ws-close key)}]]]

   [:h3.&-name name]

   [:textarea.&-data {:defaultValue @data
                      :ref          "area"
                      :onChange     #(do (reset! data (v/e-val %))
                                         (utils/autosize! (deref-node this "area")))}]]

  :componentDidMount #(let [area (deref-node % "area")]
                        (utils/autosize!    area)
                        (utils/focus-input! area)))


(defc PreviewRecordView [{:keys [key] :as record}]
  [:div
   [:div.panel
    [:span.panel-left [:icon.-pencil {:onClick #(s/trigger :ws-edit key)}]]
    [:span.panel-right]]
   [:Record record]])

(defc WorkspaceItem [{:keys [state] :as record}]
  [:div
   ((case state
      :edit    EditRecordView
      :preview PreviewRecordView
      RecordView) record)])

(defc Workspace [{:keys [ws-items]}]
  [:div
   ;; records masonry
   [:div.&-records {:ref "masonry"}
    (map WorkspaceItem (reverse ws-items))]])
