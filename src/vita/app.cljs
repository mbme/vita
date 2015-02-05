(ns vita.app
  (:require [vita.base.state :as state]
            [vita.utils.utils :as utils]

            [vita.ui.workspace :as ws]
            [vita.ui.search :as search]

            [viter.core :refer [render!]]))

(defonce _
  (let [left  (utils/query ".Root>.left")
        right (utils/query ".Root>.right")]

    (state/watch!
     #(do
        (render! left  search/SearchPanel %)
        (render! right ws/Workspace       %)))

    ;; force app to render first time
    (state/trigger-update!)))
