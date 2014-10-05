(ns vita.test_app
  (:require [vita.state :as state]
            [vita.page.records :as records]
            [vita.components :as c]
            [viter.core :as r :refer-macros [defc]]))

(defc div1 [{:keys [id prefix children]}]
  `[:h1 {:id ~id} ~prefix :lol "lol1" ~@children]
  :menu "MENU")

(defc Root [{:keys [a]}]
  [:div1#test {:prefix a} "test" [:h1 "OK"]
   '(:h2.test {:style {:color "red"}
               :class "test and other"}
              "haha")
   [:h1 (:menu div1)]])

(def counter (atom 0))

(js/window.setInterval (fn []
                         (r/render [:Root {:a (= 0 (mod (swap! counter inc) 8))}])
                         ) 1000)
