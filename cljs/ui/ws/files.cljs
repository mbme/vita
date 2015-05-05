(ns ui.ws.files
  (:require
   [utils]
   [ui.components :refer [button icon]]
   [viter :as v :refer-macros [defc]]))

(defc File [{:keys [name type ts size]}]
  [:tr
   [:td.icon [icon :type type]]
   [:td.name name]
   [:td.ts   (utils/calendar-moment ts)]
   [:td.size (utils/format-bytes-size size)]])

(defc FilesList [{:keys [record]}]
  [:div.&
   [:div.&-add
    [button :label "add file" :type :secondary]]
   [:table
    (map File
         [{:name "test.jpg" :ts 1430850772 :size 4096 :type :image}
          {:name "haha.txt" :ts 1430310772 :size 123 :type :text}
          {:name "long movie.avi" :ts 1430860772 :size 12432118 :type :video}])]])
