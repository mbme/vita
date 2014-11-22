(ns vita.state
  (:require [vita.log :as log :include-macros true]))

(def ^:private ids (atom 0))
(defn- next-id [] (swap! ids inc))
(defn- add-id
  ([record]    (add-id record (next-id)))
  ([record id] (assoc record :key id)))

(defonce ^:private state (atom {:records '()
                                ;; record is {:key 123 :name "test" :data "some value"}
                                :search-term ""
                                :workspace-menu false
                                :workspace-items '()
                                ;; item is {:key 123 :state :show}
                                }))

;; PUBLIC

(defn record-id [record]
  (:key record))

(defn get-record
  "Retrieves from `records' record by `id'.
  Returns nil if not found."
  [id records]
  (first (filter #(= id (record-id %)) records)))

(defn record-exists? [id]
  (not (nil? (get-record id (:records @state)))))

(defn update-records [fn]
  (swap! state #(assoc % :records (fn (:records %)))))

(defn update-record
  "Update record by `id'.
  If can't find record with this `id' then add new record."
  [id & rest]
  (let [record   (get-record id (:records @state))
        new-vals (apply hash-map rest)]
    (if (nil? record)
      (update-records #(conj % (add-id new-vals id)))
      (update-records (fn [records] (map #(if (= id (record-id %)) (merge record new-vals) %) records))))))

(defn load-records! [records]
  (log/info "adding new %s records" (count records))
  (update-records #(map add-id records)))

(defn watch! [func]
  (add-watch state :render (fn [_ _ _ data] (func data))))

;; SEARCH

(defn update-search!
  "If `term' really changed then update state."
  [term]
  (when-not (= term (:search-term @state))
    (log/info "new search term: %s" term)
    (swap! state assoc :search-term term)))

;; WORKSPACE
;; public
(defn ws-is-open? [id records]
  (some true? (map #(= id (:key %)) records)))

;;
(defn ws-toggle-menu []
  (swap! state #(assoc % :workspace-menu (not (:workspace-menu %)))))

(defn ws-close-records []
  (log/info "close %s records" (count (:workspace-items @state)))
  (swap! state assoc :workspace-items '()))

(defn ws-update-records [fn]
  (swap! state #(assoc % :workspace-items (fn (:workspace-items %)))))

(defn ws-update-record [id & rest]
  (ws-update-records
   (fn [records]
     (map #(if (= id (:key %))
             (merge % (apply hash-map rest))
             %) records))))

(defn ws-sync-record [id]
  (when-let [record (get-record id (:records @state))]
    (ws-update-record id :value (atom record))))

(defn ws-edit-record [id]
  (log/info "edit record %s" id)
  (ws-update-record id :state :edit))

(defn ws-preview-record [id]
  (log/info "preview record %s" id)
  (ws-update-record id :state :preview))

(defn ws-view-record [id]
  (log/info "view record %s" id)
  (ws-update-record id :state :show))

(defn ws-close-record [id]
  (log/info "close record %s" id)
  (ws-update-records (fn [records] (remove #(= id (:key %)) records))))

(defn ws-new-record []
  (ws-update-records #(conj % {:key (next-id)
                               :value (atom {:name ""
                                             :data ""})
                               :state :edit})))

(defn ws-open-record [id]
  (let [state           @state
        records         (:records state)
        workspace-items (:workspace-items state)
        record          (get-record id records)]
    (when-not (or (nil? record)
                  (ws-is-open? id workspace-items))
      (log/info "open record %s" id)
      (ws-update-records #(conj % {:key   id
                                   :value (atom record)}))
      (ws-view-record id))))
