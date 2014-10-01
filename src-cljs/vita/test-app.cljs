(ns vita.test_app
  (:require [vita.state :as state]
            [vita.page.records :as records]
            [vita.components :as c]
            [vita.react :as r :refer-macros [defc]]))

(defc Root []
  [:div#test "test" [:h1 "OK"]
   '(:h2.test {:style {:color "red"}
          :class "test and other"}
         "haha")
   [:h1]])

(r/render (Root))
