(ns vita.ui.workspace
  (:require [vita.base.bus    :refer [trigger]]
            [vita.utils.utils :refer [md->html]]
            [vita.ui.components]

            [viter :as v]
            [viter.utils :as utils]))

(defn- show-icon [types onClick]
  [:icon {:types types :onClick onClick}])

(defn- show-icons [items]
  (map (fn [[types onClick]]
         (show-icon types onClick)) items))

(v/defc Panel [{:keys [left right]}]
  [:div
   `[:span.&-left  ~@(show-icons left)]
   `[:span.&-right ~@(show-icons right)]])

(v/defc Record [{:keys [name data]}]
  [:div
   [:h1.&-name @name]
   [:div.&-body {:dangerouslySetInnerHTML
                 {:__html (md->html @data)}}]])

(v/defc RecordView [{:keys [key] :as record}]
  [:div
   [:Panel {:left  {"content-create" #(trigger :ws-edit key)}
            :right {"navigation-close"  #(trigger :ws-close key)}}]
   [:Record record]])

(v/defc EditRecordView [{:keys [key name data]}]
  [:div
   [:Panel {:left  {"image-remove-red-eye"   #(trigger :ws-preview key)}
            :right {"content-save"  #(trigger :ws-save key)
                    "navigation-close" #(trigger :ws-close key)}}]

   [:input.&-name
    {:type         "text"
     :defaultValue @name
     :ref          "input"
     :onChange     #(reset! name (v/e-val %))}]

   [:textarea.&-data
    {:defaultValue @data
     :ref          "area"
     :onChange     #(this-as this
                             (reset! data (v/e-val %))
                             (utils/autosize! (v/deref-node this "area")))}]]

  :componentDidMount #(do
                        (utils/autosize!    (v/deref-node % "area"))
                        (utils/focus-input! (v/deref-node % "input"))))


(v/defc PreviewRecordView [{:keys [key] :as record}]
  [:div
   [:Panel {:left {"content-create" #(trigger :ws-edit key)}}]
   [:Record record]])

(v/defc WorkspaceItem [record]
  [:div
   ((case (:state record)
      :edit    EditRecordView
      :preview PreviewRecordView
      :view    RecordView)
    record)])

(v/defc Workspace [{:keys [ws-items]}]
  [:div
   [:div.&-records
    (map WorkspaceItem ws-items)]])
