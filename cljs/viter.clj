(ns viter)

;; defines new component
(defmacro defc [name args render init]
  `(def ~name
     (create-component
      (str '~name)
      (fn ~args ~render)
      ~init)))
