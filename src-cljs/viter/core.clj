(ns viter.core)

;; defines new component
(defmacro defc [name args render & rest]
  `(defonce ~name
     (create-component
      (str '~name)
      (fn ~args ~render)
      (hash-map ~@rest))
     ))
