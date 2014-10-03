(ns viter.core)

;; defines new component
(defmacro defc [name args render & rest]
  `(defonce ~name
     (create-component
      (hash-map :render (fn ~args ~render) :displayName (str '~name) ~@rest)
      )))
