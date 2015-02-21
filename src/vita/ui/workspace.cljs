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

(v/defc Record [{:keys [name data]}]
  [:article.&
   [:h2.&-name @name]
   [:div.&-body {:dangerouslySetInnerHTML
                 {:__html (utils/md->html @data)}}]])

(v/defc RecordView [{:keys [key] :as record}]
  [:div.&
   [Panel
    :left  {:edit   #(trigger :ws-edit key)}
    :right {:close  #(trigger :ws-close key)}]
   [Record record]])

(v/defc EditRecordView [{:keys [key name data]}]
  [:div.&
   [Panel
    :left  {:preview #(trigger :ws-preview key)}
    :right {:save    #(trigger :ws-save key)
            :delete  #(modal/show!
                       {:id :delete-record
                        :body
                        [:h2 "DO YOU REALLY WANT TO DELETE RECORD?"]
                        :footer
                        [:div.buttons
                         [button :label "CANCEL"]
                         [button :label "TEXT" :type :secondary]
                         [button :label "OK" :type :primary]

                         [button :label "CANCEL" :style :raised]
                         [button :label "TEXT" :type :secondary :style :raised]
                         [button :label "OK" :type :primary :style :raised
                          :onClick (fn [] (trigger :atom-delete key))]]})

            :close   #(trigger :ws-close key)}]

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

  :did-mount #(do
                (utils/autosize!    (v/deref-node % "area"))
                (utils/focus-input! (v/deref-node % "input"))))


(v/defc PreviewRecordView [{:keys [key] :as record}]
  [:div.&
   [Panel :left {:edit #(trigger :ws-edit key)}]
   [Record record]])

(v/defc WorkspaceItem [record]
  [:div.&
   ((case (:state record)
      :edit    EditRecordView
      :preview PreviewRecordView
      :view    RecordView)
    record)])

(v/defc Workspace [{:keys [ws-items]}]
  [:div.&
   [:div.&-records
    (map WorkspaceItem ws-items)]])
