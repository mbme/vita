// +build prod

package main

import (
	"log"
	"net/http"
	"os"

	"github.com/codegangsta/cli"
)

func indexHandler(w http.ResponseWriter, req *http.Request) {
	path := req.URL.Path

	if path == "/" {
		path = "/index.html"
	}

	// drop leading slash
	path = path[1:]

	data, err := Asset(path)

	if err != nil {
		log.Println("GET", path, " 404 NOT FOUND")
		http.NotFound(w, req)
		return
	}

	if _, err := w.Write(data); err != nil {
		log.Println("GET", path, " 500 INTERNAL SERVER ERROR")
	}
}

func main() {
	configureLogger()
	listenSignals()

	app := cli.NewApp()
	app.Name = "vita"

	app.Flags = []cli.Flag{
		cli.IntFlag{
			Name:  "port,p",
			Value: 8081,
			Usage: "port to listen on",
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
