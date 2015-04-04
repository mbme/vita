(ns vita.ui.workspace
  (:require [vita.base.bus :as bus :refer [trigger]]
            [vita.utils.utils :as utils]
            [vita.ui.components
             :refer [icon button category]]
            [vita.ui.modal :as modal]

            [goog.style :as style]
            [clojure.string :as str]

            [viter :as v]))

(defn get-words [s]
  (str/split s #"\s+"))

(defn join [col]
  (str/join " " col))

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

(v/defc EditRecordView [{:keys [id key name data categories]}]
  [:div.&
   [Panel
    :left  {:preview #(trigger :ws-preview key)}
    :right {:save    #(trigger :ws-save key)
            ;; show :delete if record has id
            ;; (edit record, not add record)
            :delete  (when id #(modal-delete? key))
            :close   #(trigger :ws-close key)}]

   [:input.&-name.js-name
    {:type         "text"
     :defaultValue @name
     :placeholder  "TITLE"
     :onChange     #(reset! name (v/e-val %))}]

   [:input.&-categories
    {:type         "text"
     :defaultValue (join @categories)
     :placeholder  "atom categories"
     :onChange     #(reset! categories (get-words (v/e-val %)))}]

   [:textarea.&-data.js-data
    {:defaultValue @data
     :placeholder  "Type something..."
     :onChange     #(do (reset! data (v/e-val %))
                        (utils/autosize! (.-target %)))}]]

  {:did-mount #(let [el (v/node %1)]
                 (utils/autosize!    (utils/q1 el ".js-data"))
                 (utils/focus-input! (utils/q1 el ".js-name")))})


(v/defc PreviewRecordView [{:keys [key name data categories]}]
  [:div.&
   [Panel :left {:edit #(trigger :ws-edit key)}]

   (show-record @name @data @categories)])

(defn- highlight [el]
  (utils/animate! el "target"))

(defn- scroll-to [el]
  (.scrollIntoView el)
  (highlight el))

(v/defc WorkspaceItem [record]
  [:div.&
   ((case (:state record)
      :edit    EditRecordView
      :preview PreviewRecordView
      :view    RecordView)
    record)]

  (fn [this state props]
    (let [key (:key props)
          ;; scroll on every click
          unsub (bus/on-filter :ws-open #(= % key) #(scroll-to (v/node this)))]
      {:did-mount #(scroll-to (v/node this))
       :will-unmount unsub})))

(v/defc Workspace [{:keys [ws-items]}]
  [:div.&

   [button
    :class "&-new"
    :label [icon :type :plus]
    :type :floating
    :style :raised
    :large true
    :onClick #(trigger :ws-new)]

   (map WorkspaceItem ws-items)]

  ;; fix workspace height on update to avoid redundant jumps
  {:will-update #(let [el (v/node %1)]
                   (style/setHeight el (.-height (style/getSize el))))
   :did-update  #(style/setHeight (v/node %1) "auto")})
