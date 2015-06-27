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

func getRootDir(c *cli.Context) string {
	var rootDir = c.GlobalString("root")
	if rootDir == "" {
		log.Fatalf("root dir must be specified")
	}
	log.Printf("root dir: %s", rootDir)

	return rootDir
}

func main() {
	configureLogger()
	listenSignals()

	app := cli.NewApp()
	app.Name = "vita"

	app.Flags = []cli.Flag{
		cli.StringFlag{
			Name:  "root",
			Usage: "path to directory with vita files",
		},
	}

	app.Commands = []cli.Command{{
		Name:  "run",
		Usage: "run vita server",
		Flags: []cli.Flag{
			cli.IntFlag{
				Name:  "port,p",
				Value: 8080,
				Usage: "port to listen on",
			},
		},
		Action: func(c *cli.Context) {
			rootDir := getRootDir(c)

			port := c.String("port")
			log.Printf("listening on port %v", port)

			handlers.Storage = storage.NewFsStorage(rootDir)

			http.Handle("/", handlers.Server)
			if err := http.ListenAndServe(":"+port, nil); err != nil {
				log.Fatal(err)
			}
		},
	}, {
		Name:  "init",
		Usage: "create required directory structure for vita",
		Flags: []cli.Flag{
			cli.BoolFlag{
				Name:  "parents,p",
				Usage: "create parent directories if required",
			},
		},
		Action: func(c *cli.Context) {
			rootDir := getRootDir(c)

			createParents := c.Bool("parents")
			if createParents {
				log.Println("would create parent directories if required")
			}

			err := storage.InitFsStorageDirs(rootDir, createParents)
			if err == nil {
				log.Println("Done!")
			} else {
				log.Fatal(err)
			}
		},
	}}

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
