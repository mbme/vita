package main

import (
	"net/http"
	"os"
	"os/signal"

	"vita/handlers"
	"vita/log"

	"fmt"
	"github.com/codegangsta/cli"
	"time"
	"vita/storage"
)

// gitTag contains version information auto-inserted on build
var gitTag string

func listenSignals() {
	// handle SigInt
	done := make(chan os.Signal, 1)
	signal.Notify(done, os.Interrupt)

	// Fire off a goroutine to loop until that channel receives a signal.
	// When a signal is received simply exit the program
	go func() {
		<-done
		log.Info("\nreceived SIGINT, closing")
		os.Exit(0)
	}()
}

func getRootDir(c *cli.Context) string {
	var rootDir = c.Args().First()
	if rootDir == "" {
		log.Fatal("root dir must be specified")
		os.Exit(1)
	}
	log.Infof("root dir: %s", rootDir)

	return rootDir
}

func handleGlobalOpts(c *cli.Context) {
	verbose := c.GlobalBool("debug")
	log.Verbose = verbose

	if verbose {
		log.Info("logger: verbose mode")
	}
}

func main() {
	listenSignals()

	app := cli.NewApp()
	app.Name = "vita"
	app.Version = fmt.Sprintf("%s (%s)", gitTag, app.Compiled.Format(time.RFC1123Z))
	app.Usage = "run or manage wiki"

	app.Flags = []cli.Flag{
		cli.BoolFlag{
			Name:  "debug,d",
			Usage: "show more logs",
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
			handleGlobalOpts(c)

			rootDir := getRootDir(c)

			port := c.String("port")
			log.Infof("listening on port %v", port)

			storage, err := storage.NewFsStorage(rootDir)
			if err != nil {
				log.Fatalf("cannot init storage: %v", err)
				os.Exit(1)
			}

			handlers.Storage = storage

			http.Handle("/", handlers.Server)
			if err := http.ListenAndServe(":"+port, nil); err != nil {
				log.Fatalf("cannot start server: %v", err)
				os.Exit(1)
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
			handleGlobalOpts(c)

			rootDir := getRootDir(c)

			createParents := c.Bool("parents")
			if createParents {
				log.Info("would create parent directories if required")
			}

			err := storage.InitFsStorageDirs(rootDir, createParents)
			if err == nil {
				log.Info("Done!")
			} else {
				log.Fatalf("failed to init storage: %v", err)
				os.Exit(1)
			}
		},
	}}

	if err := app.Run(os.Args); err != nil {
		log.Fatalf("error running server: %v", err)
		os.Exit(1)
	}
}
