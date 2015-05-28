// +build dev

package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	configureLogger()
	listenSignals()

	r := mux.NewRouter()

	r.HandleFunc("/ws", wsHandler)

	notesRouter := r.PathPrefix("/notes").Subrouter()
	notesRouter.HandleFunc("/{noteId}/attachments", addFileHandler).Methods("POST")
	notesRouter.HandleFunc("/{noteId}/attachments/{fileId}", getFileHandler).Methods("GET")
	notesRouter.HandleFunc("/{noteId}/attachments/{fileId}", removeFileHandler).Methods("DELETE")

	http.Handle("/", r)
	if err := http.ListenAndServe(":8081", nil); err != nil {
		log.Fatal(err)
	}
}
