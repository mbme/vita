(ns vita.app
  (:require [vita.log :as log]
            [vita.generator :as gen]
            [clojure.string :as str]
            [reagent.core :as reagent :refer [atom]]))

(defonce records (atom (gen/random-records 10)))

(log/info (str/join "\n\n" (map str @records)))
