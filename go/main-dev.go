// +build dev

package main

import (
	"log"
	"net/http"
)

func main() {
	configureLogger()
	listenSignals()

	http.HandleFunc("/ws", wsHandler)

	if err := http.ListenAndServe(":8081", nil); err != nil {
		log.Fatal(err)
	}
}
