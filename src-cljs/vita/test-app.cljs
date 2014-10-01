(ns vita.test_app
  (:require [vita.state :as state]
            [vita.page.records :as records]
            [vita.components :as c]
            [vita.react :as r :refer-macros [defc]]))

(defc Root []
  [:div "test" [:h1 "OK"]
   '(:h2 {:style {:color "red"}
          :class "test"}
         "haha")
   [:h1]])

(r/render (Root))
