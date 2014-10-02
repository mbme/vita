(ns vita.components)

(defn- add-prefix [classes]
  (map #(str "fa-" %) classes))

(defn icon [& classes]
  [:i.icon.fa {:class (add-prefix classes)}])
