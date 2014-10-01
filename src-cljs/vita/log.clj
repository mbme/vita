(ns vita.log)

(defmacro deflog [level]
  `(defmacro ~level [& args#]
     `(.apply (aget js/console '~(str '~level)) js/console (into-array (map str [~@args#])))
     ))

(deflog debug)
(deflog info)
(deflog warn)
(deflog error)
