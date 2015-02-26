(ns vita.ui.workspace
  (:require [vita.base.bus    :refer [trigger]]
            [vita.utils.utils :as utils]
            [vita.ui.components :refer [icon button]]
            [vita.ui.modal :as modal]

            [viter :as v]))

(defn- show-icons [items]
  (map
   (fn [[type onClick]]
     [icon :type type :onClick onClick])
   items))

(v/defc Panel [{:keys [left right]}]
  [:div.&
   `[:span.&-left  ~@(show-icons left)]
   `[:span.&-right ~@(show-icons right)]])

(defn- show-record [name data]
  [:article
   [:h2.&-name name]
   [:div.&-data {:dangerouslySetInnerHTML
                 {:__html (utils/md->html data)}}]])

(v/defc RecordView [{:keys [key name data]}]
  [:div.&
   [Panel
    :left  {:edit   #(trigger :ws-edit key)}
    :right {:close  #(trigger :ws-close key)}]

   (show-record @name @data)])

(v/defc EditRecordView [{:keys [key name data]} this]
  [:div.&
   [Panel
    :left  {:preview #(trigger :ws-preview key)}
    :right {:save    #(trigger :ws-save key)
            :delete  #(modal/show!
                       {:id :delete-record
                        :class "delete-record"
                        :body
                        [:h2 "DELETE RECORD?"]
                        :footer
                        [:div.buttons
                         [button :label "CANCEL"]
                         [button :label "DELETE" :type :primary
                          :onClick (fn [] (trigger :ws-delete key))]]})

            :close   #(trigger :ws-close key)}]

   [:input.&-name
    {:type         "text"
     :defaultValue @name
     :placeholder  "TITLE"
     :ref          "input"
     :onChange     #(reset! name (v/e-val %))}]

   [:textarea.&-data
    {:defaultValue @data
     :ref          "area"
     :onChange     #(do (reset! data (v/e-val %))
                        (utils/autosize! (v/deref-node this "area")))}]]

  :did-mount #(do
                (utils/autosize!    (v/deref-node % "area"))
                (utils/focus-input! (v/deref-node % "input"))))


(v/defc PreviewRecordView [{:keys [key name data]}]
  [:div.&
   [Panel :left {:edit #(trigger :ws-edit key)}]

   (show-record @name @data)])

(v/defc WorkspaceItem [record]
  [:div.&
   ((case (:state record)
      :edit    EditRecordView
      :preview PreviewRecordView
      :view    RecordView)
    record)])

(v/defc Workspace [{:keys [ws-items]}]
  [:div.&
   [button
    :class "&-new"
    :label [icon :type :plus]
    :type :floating
    :style :raised
    :large true
    :onClick #(trigger :ws-new)]
   (map WorkspaceItem ws-items)])
