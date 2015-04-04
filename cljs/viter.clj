(ns viter)

(defmacro defc
  "Define new viter component."
  ([name args render]
   (defc &form &env name args render {}))
  ([name args render init]
   `(def ~name
      (create-component
       (str '~name)
       (fn ~args ~render)
       ~init))))
