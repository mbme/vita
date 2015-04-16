// +build dev

package main

import (
	"log"
	"net/http"
)

var indexHTML = renderIndexHTML(&indexHTMLConfig{
	Styles: "http://test.dev:3449/styles/main.css",
	App:    "/dist/app.js",
})

func indexHandler(w http.ResponseWriter, req *http.Request) {
	path := req.URL.Path

	if path == "/" {
		if _, err := w.Write(indexHTML); err != nil {
			log.Println("can't render index.html:", err)
		}
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
