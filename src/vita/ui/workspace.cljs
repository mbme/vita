(ns vita.ui.workspace
  (:require [vita.base.bus    :refer [trigger]]
            [vita.utils.utils :as utils]
            [vita.ui.components :refer [icon button]]
            [vita.ui.modal :as modal]

            [goog.style :as style]
            [goog.dom :as dom]

            [viter :as v])
  (:import goog.fx.dom.Scroll))

(defn- show-icons [items]
  (for [[type onClick] items
        :when (not (nil? onClick))]
    [icon :type type :onClick onClick]))

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

(defn- modal-delete? [key]
  (modal/show!
   {:id :delete-record
    :class "delete-record"
    :body
    [:h2 "DELETE RECORD?"]
    :footer
    [:div.buttons
     [button :label "CANCEL"]
     [button :label "DELETE" :type :primary
      :onClick (fn [] (trigger :ws-delete key))]]}))

(v/defc EditRecordView [{:keys [id key name data]} this]
  [:div.&
   [Panel
    :left  {:preview #(trigger :ws-preview key)}
    :right {:save    #(trigger :ws-save key)
            ;; show :delete if record has id
            ;; (edit record, not add record)
            :delete  (when id #(modal-delete? key))
            :close   #(trigger :ws-close key)}]

   [:input.&-name
    {:type         "text"
     :defaultValue @name
     :placeholder  "TITLE"
     :ref          "input"
     :onChange     #(reset! name (v/e-val %))}]

   [:textarea.&-data
    {:defaultValue @data
     :placeholder  "Type something..."
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

(defn- scroll-to [el container]
  (let [old-x (.-scrollTop container)
        new-x (->
               (style/getContainerOffsetToScrollInto el container)
               (.-y)
               (- 20))]
    (.play (new Scroll container
                (array 0 old-x)
                (array 0 new-x)
                300))))

(defn- scroll-if-active [el]
  (when (utils/has-class el "active")
    (scroll-to el (dom/getAncestorByClass el "right"))))

(v/defc WorkspaceItem [record]
  [:div.& {:class (when (:active record) "active")}
   ((case (:state record)
      :edit    EditRecordView
      :preview PreviewRecordView
      :view    RecordView)
    record)]

  :did-mount  #(scroll-if-active (v/get-node %))
  :did-update #(scroll-if-active (v/get-node %)))

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
