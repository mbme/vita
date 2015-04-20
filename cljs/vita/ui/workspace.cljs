(ns vita.ui.workspace
  (:require [vita.base.bus :as bus :refer [trigger]]
            [vita.utils.utils :as utils]
            [vita.ui.components
             :refer [icon button category Tabs]]
            [vita.ui.modal :as modal]

            [goog.style :as style]
            [clojure.string :as str]

            [viter :as v]))

;; UTILS

(defn- get-words [s]
  (str/split s #"\s+"))

(defn- join [col]
  (str/join " " col))

(defn- highlight [el]
  (utils/animate! el "target"))

(defn- scroll-to [el]
  (.scrollIntoView el)
  (highlight el))

(defn- show-record [name data categories]
  [:article.&
   [:div.&-name name]
   [:div.&-categories (map #(category :key %) categories)]
   [:div.&-data {:dangerouslySetInnerHTML
                 {:__html (utils/md->html data)}}]])


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


;; COMPONENTS

(v/defc RecordView [{:keys [name data categories]}]
  (show-record name data categories))


(v/defc RecordEditor [{:keys [record]}]
  [:div.&

   [:input.&-name.js-name
    {:type         "text"
     :defaultValue (:name @record)
     :placeholder  "TITLE"
     :onChange     #(swap! record assoc :name (v/e-val %))}]

   [:input.&-categories
    {:type         "text"
     :defaultValue (join (:categories @record))
     :placeholder  "atom categories"
     :onChange     #(swap! record assoc :categories (get-words (v/e-val %)))}]

   [:textarea.&-data
    {:defaultValue (:data @record)
     :placeholder  "Type something..."
     :onChange     #(swap! record assoc :data (v/e-val %))}]]

  {:did-mount #(utils/focus-input!
                (utils/q1 (v/node %1) ".js-name"))})


(v/defc RecordPreviewer [{:keys [record]}]
  (let [record @record
        name (:name record)
        data (:data record)
        categories (:categories record)]
    (show-record name data categories)))


(v/defc WorkspaceItem [{:keys [id key name data categories] :as props} state]
  (if (:edit @state)

    [:div.&.is-edited
     [:div.panel
      [button :label "SAVE" :class "&-save"
       :onClick (fn []
                  (trigger :ws-save @(:record @state))
                  (swap! state assoc :edit false))]
      (when id
        [button :label "CANCEL" :class "&-cancel"
         :onClick #(swap! state assoc :edit false)])
      (if id ;; we cannot delete new record
        [button :label "DELETE" :class "&-delete"
         :onClick #(modal-delete? key)]
        ;; instead we can close it
        [button :label "CLOSE" :class "&-close"
         :onClick #(trigger :ws-close key)])]
     [Tabs :items
      [{:label "WRITE"
        :body [RecordEditor :record (:record @state)]}

       {:label "PREVIEW"
        :body [RecordPreviewer :record (:record @state)]}

       {:label "FILES"
        :body [:h1 "FILES"]}]]]

    [:div.&.is-showed
     [:div.panel
      [button :label "EDIT" :class "&-edit"
       :onClick #(reset! state {:edit true :record (atom props)})]
      [button :label "CLOSE" :class "&-close"
       :onClick #(trigger :ws-close key)]]
     [RecordView props]])

  (fn [this state props]
    (reset! state {:edit (nil? (:id props))
                   :record (atom props)})

    (let [key (:key props)
          ;; scroll on every click on records list
          handler #(when (= % key)
                     (scroll-to (v/node this)))]
      (bus/on :ws-open handler)
      {:did-mount #(scroll-to (v/node this))
       :will-unmount #(bus/off :ws-open handler)})))


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
