package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"

	"github.com/codegangsta/cli"
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

	app := cli.NewApp()
	app.Name = "vita"

	app.Flags = []cli.Flag{
		cli.IntFlag{
			Name:  "port",
			Value: 8080,
			Usage: "websockets port",
		},
	}

	app.Action = func(c *cli.Context) {
		var port = c.String("port")
		log.Printf("listening on port %v", port)

		http.HandleFunc("/", indexHandler)
		http.HandleFunc("/ws", wsHandler)

		if err := http.ListenAndServe(":"+port, nil); err != nil {
			log.Fatal(err)
		}
	}

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
