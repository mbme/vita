(ns vita.ui.components
  (:require [com.JQuery]
            [com.materialize]
            [viter.core :as r :refer-macros [defc]]
            [viter.utils :as utils]
            [viter.react :as react]))

(defprotocol IconType
  (stringify [this]))

(extend-type string
  IconType
  (stringify [this] (str "mdi-" this)))

(extend-type PersistentVector
  IconType
  (stringify [this] (utils/join (map stringify this))))

(defc icon [{:keys [class types] :as all}]
  (let [icon-class (stringify types)
        total-class (str class " " icon-class)]
    [:i (assoc all :class total-class)]))

(defn- spinner-layer [color]
  [:div.spinner-layer {:class (str "spinner-" color)}
   [:div.circle-clipper.left  [:div.circle]]
   [:div.gap-patch            [:div.circle]]
   [:div.circle-clipper.right [:div.circle]]])

(defc spinner [{:keys [active size]}]
  [:div.preloader-wrapper
   {:class {:active active
            :big (= size :big)
            :small (= size :small)}}
   (spinner-layer "blue")
   (spinner-layer "red")
   (spinner-layer "yellow")
   (spinner-layer "green")])

(defc modal [{:keys [class children footer]}]
  [:div {:class class}
   `[:div.&-content ~@children]
   (when-not (nil? footer)
     `[:div.&-footer  ~@footer])]

  ;; show modal on render
  :did-mount
  #(do (-> (react/get-node %)
           (js/$)
           (.openModal #js {:dismissible false}))
       (-> (js/$ "body")
           (.addClass "modal-open")))

  ;; hide modal on unmount
  :will-unmount
  #(do
     (-> (react/get-node %)
         (js/$)
         (.closeModal))
     (-> (js/$ "body")
         (.removeClass "modal-open"))))
