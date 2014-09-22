(ns vita.react)

(defmacro defc [name args render & rest]
  `(def ~name
     (create-component
      (hash-map :render (fn ~args ~render) :displayName '~name ~@rest))
     ))
