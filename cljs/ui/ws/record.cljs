(ns ui.ws.record
  (:require [viter :refer-macros [defc]]
            [ui.components :refer [category]]))


(defn- show-record [name data categories]
  [:article.&
   [:div.&-name name]
   [:div.&-categories (map #(category :key %) categories)]
   [:div.&-data {:dangerouslySetInnerHTML
                 {:__html (utils/md->html data)}}]])


(defc RecordView [{:keys [name data categories]}]
  (show-record name data categories))


(defc RecordPreviewer [{:keys [record]}]
  (let [record @record
        name (:name record)
        data (:data record)
        categories (:categories record)]
    (show-record name data categories)))
