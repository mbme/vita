(ns vita.ui.components
  (:require [viter :as v]))

(def ^:private icons
  {:close    "ion-close"
   :edit     "ion-edit"
   :preview  "ion-eye"
   :save     "ion-android-upload"
   :delete   "ion-trash-a"
   :search   "ion-ios-search-strong"
   :plus     "ion-plus"

   :record "ion-ios-paper-outline"})

(defn get-icon [type]
  (when-not (contains? icons type)
    (throw (str "bad icon type " type)))
  (get icons type))

(v/defc icon [{:keys [class type] :as all}]
  [:i.&
   (assoc all :class [class (get-icon type)])])

(defn- spinner-layer [color]
  [:div.spinner-layer {:class (str "spinner-" color)}
   [:div.circle-clipper.left  [:div.circle]]
   [:div.gap-patch            [:div.circle]]
   [:div.circle-clipper.right [:div.circle]]])

(v/defc spinner [{:keys [active size]}]
  [:div.&.preloader-wrapper
   {:class {:active (not= active false)
            :big (= size :big)
            :small (= size :small)}}
   (spinner-layer "blue")
   (spinner-layer "red")
   (spinner-layer "yellow")
   (spinner-layer "green")])


;; button types: default primary secondary floating
;; button styles: flat(default) raised
(v/defc button [{:keys [type style class label onClick large]}]
  (let [type-class (case type
                     :primary   "btn-primary"
                     :secondary "btn-secondary"
                     :floating  "btn-floating"
                     nil        ""
                     (throw (str "bad button type " type)))

        style-class (case style
                      :flat   "btn-flat"
                      nil     "btn-flat"
                      :raised "btn"
                      (throw (str "bad button style " style)))]

    [:button {:class [type-class style-class class
                      (when large "btn-large")]
              :onClick onClick}
     label]))
