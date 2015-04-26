(ns ui.ws.editor
  (:require [viter :as v :refer-macros [defc]]
            [utils]

            [clojure.string :as str]))

(defn- get-words [s]
  (str/split s #"\s+"))

(defn- join [col]
  (str/join " " col))


(defc RecordEditor [{:keys [record]}]
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
