(ns vita.context
  (:require [clojure.string :as str]
            [taoensso.timbre :as timbre]))

(def config {:port 8080
             :base-dir "/tmp/test"
             :create-if-not-exists true})

(defn setup-logger! []
  (timbre/set-config! [:timestamp-pattern] "HH:mm:ss")
  (timbre/set-config!
   [:fmt-output-fn]
   (fn [{:keys [level throwable message timestamp ns]}
        ;; Any extra appender-specific opts:
        & [{:keys [nofonts?] :as appender-fmt-output-opts}]]
     ;; <timestamp> <LEVEL> [<ns>] <message> <throwable>
     (format "%s %s [%s] %s%s"
             timestamp (-> level name str/upper-case) ns (or message "")
             (or (timbre/stacktrace throwable "\n" (when nofonts? {})) "")))))
