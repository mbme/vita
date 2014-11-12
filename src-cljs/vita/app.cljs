(ns vita.app
  (:require [vita.state :as state]
            [vita.components :as c]
            [viter.core :as v :refer-macros [defc]]
            [vita.url :as url]))

(defc NavLink [{:keys [type icon children] :as all}]
  [:div [:icon {:class icon}] `[:span ~@children]])

(defc NavPanel []
  [:nav
   [:NavLink {:type :records :icon "-home"} "records"]])

(defn- has-term? [rec term]
  (if (count term)
    (-> (:name rec)
        (.indexOf term)
        (> -1))
    true))

(defc SearchResult [{:keys [record]}]
  [:li {:onClick #(state/open-record (state/record-id record))
        :class (when (:state record) "&-selected")}
   (:name record)])

(defc SearchPanel [{:keys [search-term records]}]
  [:div
   [:input.&-search {:type "text"
                     :placeholder "SEARCH"
                     :defaultValue search-term
                     :onKeyUp #(state/update-search! (v/e-val %))}]
   (let [records (filter #(has-term? % search-term) records)]
     [:ul (map #(SearchResult {:record % :key (state/record-id %)}) records)])
   ])

(defc Record [{:keys [record]}]
  [:div
   [:h3.&-title (:name record)]
   [:div.&-body (:data record)]])

(defc RecordView [{:keys [record key]}]
  [:div [:div.panel
         [:span.panel-left
          [:icon.-pencil {:onClick #(state/update-record key (assoc record :state :edit))}]]
         [:span.panel-right
          [:icon.-close {:onClick #(state/close-record key)}]]]
   [:Record {:record record}]])

(defn e-val [e]
  (.-value (.-target e)))

(defc EditRecordView [{:keys [record key]}]
  (let [name (atom (:name record))
        data (atom (:data record))]
    [:div [:div.panel
           [:span.panel-left
            [:icon.-eye {:onClick #(state/update-record key (assoc record :state :preview))}]]
           [:span.panel-right
            [:icon.-save {:onClick #(state/update-record key (assoc record :name @name :data @data :state :show))}]
            [:icon.-close {:onClick #(state/update-record key (assoc record :state :show))}]]]
     [:input.&-name {:defaultValue (:name record) :type "text" :onChange #(reset! name (e-val %))}]
     [:textarea.&-data {:defaultValue (:data record) :onChange #(reset! data (e-val %))}]]))

(defc PreviewRecordView [{:keys [record key]}]
  [:div [:div.panel
         [:span.panel-left [:icon.-pencil {:onClick #(state/update-record key (assoc record :state :edit))}]]
         [:span.panel-right]]
   [:Record {:record record}]])

(defc WorkspaceItem [{:keys [record] :as args}]
  [:div (let [view (case (:state record)
                     :edit    EditRecordView
                     :preview PreviewRecordView
                     RecordView)]
          (view args))])

(defc Workspace [{:keys [records workspace-menu]}]
  [:div
   [:div.&-options
    [:icon.-cog {:onClick state/toggle-workspace-menu}]
    [:Dropdown {:visible workspace-menu}
     [:div [:icon.-expand.-fw] " fullscreen"]
     [:div {:onClick (fn [] (state/toggle-workspace-menu) (state/close-records))}
      [:icon.-close.-fw] " close all"]]]
   [:div.&-records
    [:CSSTransitionGroup {:class "&-masonry" :transitionName "masonry"}
     (->> records
          (filter #(:state %))
          (map #(WorkspaceItem {:record % :key (state/record-id %)})))]]
   ])

(defc Root [state]
  [:div
   [:NavPanel]
   [:SearchPanel state]
   [:Workspace state]])

(defonce _
  (do
    (state/watch! #(v/render! js/document.body Root %))
    (url/watch! #(js/console.warn (clj->js %)))
    ))
