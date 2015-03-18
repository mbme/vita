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
		log.Println("GET", path, " 200 OK")
		writeIndexHTML(w)
		return
	}

	// skip leading slash
	path = path[1:]

	data, err := Asset(path)
	// log.Println(AssetInfo(path))

	if err != nil {
		log.Println("GET", path, " 404 NOT FOUND")
		http.NotFound(w, req)
		return
	}

	if _, err := w.Write(data); err != nil {
		log.Println("GET", path, " 500 INTERNAL SERVER ERROR")
		return
	}

	log.Println("GET", path, " 200 OK")
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
