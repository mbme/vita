(ns vita.workspace
  (:require [vita.state :as s]
            [viter.core :as v :refer-macros [defc]]
            [viter.utils :as utils]
            [viter.react :refer [deref-node]]))

(defn- scrollTo [elem container]
  (.animate container #js {:scrollTop (.-top (.offset elem))} 300))

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
   [:h3.&-name name]
   [:div.&-body {:dangerouslySetInnerHTML
                 {:__html (utils/md->html @data)}}]])

(defc RecordView [{:keys [key] :as record}]
  [:div
   [:Panel {:left  {"pencil" #(s/trigger :ws-edit key)}
            :right {"close"  #(s/trigger :ws-close key)}}]
   [:Record record]])

(defc EditRecordView [{:keys [key name data]} this]
  [:div
   [:Panel {:left  {"eye"   #(s/trigger :ws-preview key)}
            :right {"save"  #(s/trigger :ws-save key)
                    "close" #(s/trigger :ws-close key)}}]
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
   [:Panel {:left {"pencil" #(s/trigger :ws-edit key)}}]
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
    (map WorkspaceItem (reverse ws-items))]])
