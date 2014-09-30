(ns vita.log)

(defmacro deflog [& levels]
  (doseq [level levels]
    `(defmacro ~level [& args#]
       `(.apply (aget js/console '~(str '~level)) js/console (into-array (map str [~@args#])))
       )))

(deflog debug info warn error)
