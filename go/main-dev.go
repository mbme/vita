// +build dev

package main

import (
	"log"
	"net/http"
)

func indexHandler(w http.ResponseWriter, req *http.Request) {
	path := req.URL.Path
	log.Println("GET", path)

	if path == "/" {
		writeIndexHTML(w)
		return
	}

	http.ServeFile(w, req, "."+path)
}

func main() {
	configureLogger()
	listenSignals()

	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/ws", wsHandler)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
