package main

import (
	"log"
	"os"
	"os/signal"
)

func configureLogger() {
	// use stdout instead of stderr
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Ltime)
}

func listenSignals() {
	// handle SigInt
	done := make(chan os.Signal, 1)
	signal.Notify(done, os.Interrupt)

	// Fire off a goroutine to loop until that channel receives a signal.
	// When a signal is received simply exit the program
	go func() {
		<-done
		log.Printf("received SIGINT, closing")
		os.Exit(0)
	}()
}
