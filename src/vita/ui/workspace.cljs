(ns vita.ui.workspace
  (:require [vita.base.bus    :refer [trigger]]
            [vita.utils.utils :as utils]
            [vita.ui.components
             :refer [icon button category]]
            [vita.ui.modal :as modal]

            [viter :as v]))

(defn- show-items [items]
  (for [[text onClick] items
        :when (not (nil? onClick))]
    [button :label text :onClick onClick]))

(v/defc Panel [{:keys [left right]}]
  [:div.&
   `[:span.&-left  ~@(show-items left)]
   `[:span.&-right ~@(show-items right)]])


(defn- show-record [name data categories]
  [:article
   [:div.&-name name]
   [:div.&-categories (map #(category :key %) categories)]
   [:div.&-data {:dangerouslySetInnerHTML
                 {:__html (utils/md->html data)}}]])

(v/defc RecordView [{:keys [key name data categories]}]
  [:div.&
   [Panel
    :left  {:edit   #(trigger :ws-edit key)}
    :right {:close  #(trigger :ws-close key)}]

   (show-record @name @data @categories)])

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

(v/defc EditRecordView [{:keys [id key name data categories]} this]
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

   [:input.&-categories
    {:type         "text"
     :defaultValue (v/join @categories)
     :placeholder  "atom categories"
     :onChange     #(reset! categories (->
                                        (v/e-val %)
                                        v/get-words))}]

   [:textarea.&-data
    {:defaultValue @data
     :placeholder  "Type something..."
     :ref          "area"
     :onChange     #(do (reset! data (v/e-val %))
                        (utils/autosize! (v/deref-node this "area")))}]]

  :did-mount #(do
                (utils/autosize!    (v/deref-node % "area"))
                (utils/focus-input! (v/deref-node % "input"))))


(v/defc PreviewRecordView [{:keys [key name data categories]}]
  [:div.&
   [Panel :left {:edit #(trigger :ws-edit key)}]

   (show-record @name @data @categories)])


(defn- scroll-to [el]
  (utils/scroll-to! el (utils/q-parents el ".right") 300))

(v/defc WorkspaceItem [record]
  [:div.&
   ((case (:state record)
      :edit    EditRecordView
      :preview PreviewRecordView
      :view    RecordView)
    record)]

  :did-mount  #(let [el (v/get-node %)]
                 ;; scroll on open
                 (scroll-to el)))

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
