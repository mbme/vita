package handlers

import (
	"github.com/gorilla/mux"
	"net/http"
)

// Server is vita HTTP server
var Server http.Handler

func init() {
	router := mux.NewRouter()

	router.HandleFunc("/ws", WsHandler)

	notesRouter := router.PathPrefix("/notes").Subrouter()
	notesRouter.HandleFunc("/{type}/{id}/attachments", AddFileHandler).Methods("POST")
	notesRouter.HandleFunc("/{type}/{id}/attachments/{fileId}", GetFileHandler).Methods("GET")
	notesRouter.HandleFunc("/{type}/{id}/attachments/{fileId}", RemoveFileHandler).Methods("DELETE")

	router.PathPrefix("/").Handler(&StaticServer{})

	Server = &CorsServer{router}
}
