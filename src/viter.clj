(ns viter)

;; defines new component
(defmacro defc [name args render & rest]
  `(def ~name
     (create-component
      (str '~name)
      (fn ~args ~render)
      (hash-map ~@rest))))
