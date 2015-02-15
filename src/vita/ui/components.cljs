(ns vita.ui.components
  (:require [com.JQuery]
            [com.materialize]
            [viter :as v]))

(def ^:private icons
  {:close    "mdi-navigation-close"
   :edit     "mdi-content-create"
   :preview  "mdi-image-remove-red-eye"
   :save     "mdi-content-save"
   :search   "mdi-action-search"})

(v/defc icon [{:keys [class type] :as all}]
  (let [icon-class  (get icons type)
        total-class (str class " " icon-class)]
    [:i (assoc all :class total-class)]))

(defn- spinner-layer [color]
  [:div.spinner-layer {:class (str "spinner-" color)}
   [:div.circle-clipper.left  [:div.circle]]
   [:div.gap-patch            [:div.circle]]
   [:div.circle-clipper.right [:div.circle]]])

(v/defc spinner [{:keys [active size]}]
  [:div.preloader-wrapper
   {:class {:active active
            :big (= size :big)
            :small (= size :small)}}
   (spinner-layer "blue")
   (spinner-layer "red")
   (spinner-layer "yellow")
   (spinner-layer "green")])

(v/defc modal [{:keys [class children footer]}]
  [:div {:class class}
   `[:div.&-content ~@children]
   (when-not (nil? footer)
     `[:div.&-footer  ~@footer])]

  ;; show modal on render
  :did-mount
  #(do (-> (v/get-node %)
           (js/$)
           (.openModal #js {:dismissible false}))
       (-> (js/$ "body")
           (.addClass "modal-open")))

  ;; hide modal on unmount
  :will-unmount
  #(do
     (-> (v/get-node %)
         (js/$)
         (.closeModal))
     (-> (js/$ "body")
         (.removeClass "modal-open"))))
