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

	http.Handle("/", &corsServer{r})
	if err := http.ListenAndServe(":8081", nil); err != nil {
		log.Fatal(err)
	}
}

type corsServer struct {
	r *mux.Router
}

func (s *corsServer) ServeHTTP(rw http.ResponseWriter, req *http.Request) {
	if origin := req.Header.Get("Origin"); origin != "" {
		rw.Header().Set("Access-Control-Allow-Origin", origin)
		rw.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		rw.Header().Set("Access-Control-Allow-Headers",
			"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	}
	// Stop here if its Preflighted OPTIONS request
	if req.Method == "OPTIONS" {
		return
	}
	// Lets Gorilla work
	s.r.ServeHTTP(rw, req)
}
