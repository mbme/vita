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

(defc SearchResult [{:keys [record selected]}]
  [:li {:onClick #(state/open-record! (state/record-id record))
        :class (when selected "&-selected")}
   (:name record)])

(defc SearchPanel [{:keys [search-term records selected-ids]}]
  [:div
   [:input.&-search {:type "text"
                     :placeholder "SEARCH"
                     :defaultValue search-term
                     :onKeyUp #(state/update-search! (v/e-val %))}]
   (let [records (filter #(has-term? % search-term) records)]
     [:ul (map #(SearchResult {:record %
                               :key (state/record-id %)
                               :selected (contains? selected-ids (state/record-id %))})
               records)])
   ])

(defc Record [{:keys [record key]}]
  [:div [:div.panel
         [:span.panel-left [:icon.-expand]]
         [:span.panel-right
          [:icon.-pencil {:onClick #(state/update-record key (assoc record :edit true))}]
          [:icon.-close {:onClick #(state/close-record! key)}]]]
   [:h3.&-title (:name record)]
   [:div.&-body (:data record)]])

(defc RecordEditor [{:keys [record key]}]
  [:div [:div.panel
         [:span.panel-left [:icon.-expand]]
         [:span.panel-right
          [:icon.-eye]
          [:icon.-close]]]
   [:input.&-name {:value (:name record) :type "text"}]
   [:textarea.&-data {:value (:data record)}]])

(defn- show-record [id]
  (let [record (state/rec-by-id id)
        edit (= (:edit record) true)
        params {:record record :key id}]
    (if edit
      (RecordEditor params)
      (Record params))))

(defc Workspace [{:keys [records selected-ids workspace-menu]}]
  [:div
   [:div.&-options
    [:icon.-cog {:onClick state/toggle-workspace-menu}]
    [:Dropdown {:visible workspace-menu}
     [:div [:icon.-expand.-fw] " fullscreen"]
     [:div {:onClick (fn [] (state/toggle-workspace-menu) (state/close-records))}
      [:icon.-close.-fw] " close all"]]]
   [:div.&-records
    [:CSSTransitionGroup {:class "&-masonry" :transitionName "masonry"}
     (map show-record selected-ids)]]
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
