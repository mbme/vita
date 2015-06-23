package handlers

import (
	"github.com/gorilla/mux"
	"net/http"
)

// Server is vita HTTP server
var Server http.Handler

func init() {
	router := mux.NewRouter()

	router.HandleFunc("/", AssetsHandler)

	router.HandleFunc("/ws", WsHandler)

	notesRouter := router.PathPrefix("/notes").Subrouter()
	notesRouter.HandleFunc("/{noteId}/attachments", AddFileHandler).Methods("POST")
	notesRouter.HandleFunc("/{noteId}/attachments/{fileId}", GetFileHandler).Methods("GET")
	notesRouter.HandleFunc("/{noteId}/attachments/{fileId}", RemoveFileHandler).Methods("DELETE")

	Server = &CorsServer{router}
}
