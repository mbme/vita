(ns vita.workspace
  (:require [vita.state  :refer [trigger]]
            [vita.utils  :refer [md->html]]

            [viter.core :refer-macros [defc]]
            [viter.utils :as utils]
            [viter.react :refer [deref-node e-val]]))

(defn- show-icon [types onClick]
  [:icon {:types types :onClick onClick}])

(defn- show-icons [items]
  (map (fn [[types onClick]]
         (show-icon types onClick)) items))

(defc Panel [{:keys [left right]}]
  [:div
   `[:span.&-left  ~@(show-icons left)]
   `[:span.&-right ~@(show-icons right)]])

(defc Record [{:keys [name data]}]
  [:div
   [:h1.&-name name]
   [:div.&-body {:dangerouslySetInnerHTML
                 {:__html (md->html @data)}}]])

(defc RecordView [{:keys [key] :as record}]
  [:div
   [:Panel {:left  {"pencil" #(trigger :ws-edit key)}
            :right {"close"  #(trigger :ws-close key)}}]
   [:Record record]])

(defc EditRecordView [{:keys [key name data]} this]
  [:div
   [:Panel {:left  {"eye"   #(trigger :ws-preview key)}
            :right {"save"  #(trigger :ws-save key)
                    "close" #(trigger :ws-close key)}}]
   [:h1.&-name name]

   [:textarea.&-data
    {:defaultValue @data
     :ref          "area"
     :onChange     #(do (reset! data (e-val %))
                        (utils/autosize! (deref-node this "area")))}]]

  :componentDidMount #(let [area (deref-node % "area")]
                        (utils/autosize!    area)
                        (utils/focus-input! area)))


(defc PreviewRecordView [{:keys [key] :as record}]
  [:div
   [:Panel {:left {"pencil" #(trigger :ws-edit key)}}]
   [:Record record]])

(defc WorkspaceItem [{:keys [state] :as record}]
  [:div
   ((case state
      :edit    EditRecordView
      :preview PreviewRecordView
      :view    RecordView)
    record)])

(defc Workspace [{:keys [ws-items]}]
  [:div
   [:div.&-records
    (map WorkspaceItem ws-items)]])
