(ns viter.core)

;; defined components set
(def components (atom #{}))

;; defines new component
(defmacro defc [name args render & rest]
  (swap! components conj name)
  `(def ~name
     (create-component
      (hash-map :render (fn ~args ~render) :displayName '~name ~@rest)
      )))

;; inserts vector of defined components names
(defmacro defc-list []
  (into [] (map str @components)))
