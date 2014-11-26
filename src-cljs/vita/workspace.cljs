(ns vita.workspace
  (:require [vita.state :as s]
            [viter.core :as v :refer-macros [defc]]
            [viter.utils :as utils]
            [viter.react :refer [get-node get-ref]]))

(defn to-$ [el] (js/$ el))

(defn $node [el]
  (to-$ (get-node el)))

(defn scrollTo [elem container]
  (.animate container #js {:scrollTop (.-top (.offset elem))} 300))

(defn do-draggable [elem ws]
  (.packery ws "bindDraggabillyEvents" (new js/Draggabilly elem)))

(def ^:dynamic ^:private *ws* nil)

(defc Record [{:keys [value]}]
  [:div
   [:h3.&-title (:name @value)]
   [:div.&-body {:dangerouslySetInnerHTML {:__html (utils/md->html (:data @value))}}]])

(defc RecordView [{:keys [key] :as record}]
  [:div [:div.panel
         [:span.panel-left
          [:icon.-pencil {:onClick #(s/ws-edit-record key)}]]
         [:span.panel-right
          [:icon.-close {:onClick #(s/ws-close-record key)}]]]
   [:Record record]])

(def ref-area "area")
(def ref-input "input")

(defn autogrow-area [this]
  (utils/autosize! (get-node (get-ref this ref-area))))

(defc EditRecordView [{:keys [key value is-new]} this]
  [:div
   [:div.panel
    [:span.panel-left
     [:icon.-eye {:onClick #(s/ws-preview-record key)}]]
    [:span.panel-right
     [:icon.-save {:onClick
                   #(do (s/update-record key
                                         :name (:name @value)
                                         :data (:data @value))
                        (s/ws-sync-record key)
                        (s/ws-view-record key))}]
     [:icon.-close {:onClick #(if is-new
                                (s/ws-close-record key)
                                (do (s/ws-sync-record key)
                                    (s/ws-view-record key)))}
      ]]]

   [:input.&-name {:type         "text"
                   :ref          ref-input
                   :defaultValue (:name @value)
                   :onChange     #(swap! value assoc :name (v/e-val %))}]

   [:textarea.&-data {:defaultValue (:data @value)
                      :ref          ref-area
                      :onChange     #(do (autogrow-area this)
                                         (.packery *ws* "fit" (.-parentNode (get-node this)))
                                         (swap! value assoc :data (v/e-val %)))}]]

  :componentDidMount #(do (autogrow-area %)
                          (utils/focus-input! (get-node (get-ref % ref-input)))))


(defc PreviewRecordView [{:keys [key] :as record}]
  [:div [:div.panel
         [:span.panel-left [:icon.-pencil {:onClick #(s/ws-edit-record key)}]]
         [:span.panel-right]]
   [:Record record]])

(defc WorkspaceItem [{:keys [state] :as record}]
  [:div (let [view (case state
                     :edit    EditRecordView
                     :preview PreviewRecordView
                     RecordView)]
          (view record))]
  :componentDidMount #(when *ws* (let [elem (get-node %)]
                                   (.packery *ws* "appended" elem)
                                   (scrollTo (to-$ elem) (.parent *ws*))
                                   (do-draggable elem *ws*)))
  :componentDidUpdate #(.packery *ws* "fit" (get-node %))
  :componentWillUnmount #(do (.packery *ws* "remove" (get-node %))
                             (.packery *ws*)))


(defc Workspace [{:keys [workspace-menu workspace-items]}]
  [:div
   ;; options dropdown
   [:div.&-options
    [:icon.-cog {:onClick s/ws-toggle-menu}]
    [:Dropdown {:visible workspace-menu}
     [:div [:icon.-expand.-fw] " fullscreen"]
     [:div {:onClick (fn []
                       (s/ws-toggle-menu)
                       (s/ws-close-records))}
      [:icon.-close.-fw] " close all"]]]

   ;; records masonry
   [:div.&-records {:ref "masonry"} (map WorkspaceItem (reverse workspace-items))]
   ]
  :componentDidMount (fn [this]
                       (set! *ws* ($node (get-ref this "masonry")))
                       (.packery *ws* #js {:gutter 10 :columnWidth 550})
                       ;; init already added workspace items
                       (.each (.children *ws*) #(do-draggable %2 *ws*)))
  :componentWillUnmount #(.packery *ws* "destroy"))
