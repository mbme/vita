package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"

	"vita/handlers"

	"github.com/codegangsta/cli"
	"vita/storage"
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

func main() {
	configureLogger()
	listenSignals()

	app := cli.NewApp()
	app.Name = "vita"

	app.Flags = []cli.Flag{
		cli.IntFlag{
			Name:  "port,p",
			Value: 8080,
			Usage: "port to listen on",
		},
		cli.StringFlag{
			Name:  "root",
			Usage: "path to directory with vita files",
		},
	}

	app.Action = func(c *cli.Context) {
		var port = c.String("port")
		log.Printf("listening on port %v", port)

		var rootDir = c.String("root")
		if rootDir == "" {
			log.Fatalf("root dir must be specified")
		}
		log.Printf("root dir: %s", rootDir)

		handlers.Storage = storage.NewFsStorage(rootDir)

		http.Handle("/", handlers.Server)
		if err := http.ListenAndServe(":"+port, nil); err != nil {
			log.Fatal(err)
		}
	}

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
