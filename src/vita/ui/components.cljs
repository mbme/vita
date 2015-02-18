(ns vita.ui.components
  (:require [viter :as v]))

(def ^:private icons
  {:close    "ion-close"
   :edit     "ion-edit"
   :preview  "ion-eye"
   :save     "ion-android-upload"
   :search   "ion-ios-search-strong"})

(defn get-icon [type]
  (when-not (contains? icons type) (throw (str "bad icon type " type)))
  (get icons type))

(v/defc icon [{:keys [class type] :as all}]
  (let [icon-class  (get-icon type)
        total-class (str class " " icon-class)]
    [:i (assoc all :class total-class)]))

(defn- spinner-layer [color]
  [:div.spinner-layer {:class (str "spinner-" color)}
   [:div.circle-clipper.left  [:div.circle]]
   [:div.gap-patch            [:div.circle]]
   [:div.circle-clipper.right [:div.circle]]])

(v/defc spinner [{:keys [active size]}]
  [:div.preloader-wrapper
   {:class {:active (not= active false)
            :big (= size :big)
            :small (= size :small)}}
   (spinner-layer "blue")
   (spinner-layer "red")
   (spinner-layer "yellow")
   (spinner-layer "green")])

(v/defc button [{:keys [type text onClick]}]
  [:div text])
