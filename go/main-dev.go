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
	r.HandleFunc("/notes/{noteId}/attachments", fileHandler).Methods("POST")

	http.Handle("/", r)
	if err := http.ListenAndServe(":8081", nil); err != nil {
		log.Fatal(err)
	}
}
