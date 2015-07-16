package main

import (
	"net/http"
	"os"
	"os/signal"

	"vita/handlers"
	"vita/log"

	"fmt"
	"github.com/codegangsta/cli"
	"strconv"
	"time"
	"vita/storage"
)

const defaultConfigFile = "~/.config/vita.json"

// gitTag contains version information auto-inserted on build
var gitTag string

func main() {
	listenSignals()

	var conf Config

	app := cli.NewApp()
	app.Name = "vita"
	app.Version = fmt.Sprintf("%s (%s)", gitTag, app.Compiled.Format(time.RFC1123Z))
	app.Usage = "run or manage wiki"

	// GLOBAL FLAGS
	app.Flags = []cli.Flag{
		cli.BoolFlag{
			Name:  "debug,d",
			Usage: "show more logs",
		},
		cli.StringFlag{
			Name:  "config",
			Usage: "alternative config file (default is in " + defaultConfigFile + ")",
		},
	}

	// PARSE CONFIG / GLOBAL OPTS
	setupConfig := func(c *cli.Context) (err error) {
		if c.GlobalIsSet("config") {
			conf, err = readConfigFile(c.GlobalString("config"))

			if err != nil {
				return log.Fatalf("cannot read config file: %v", err)
			}
		} else {
			conf, err = readConfigFile(defaultConfigFile)
			if err != nil {
				if os.IsNotExist(err) {
					log.Debugf("config file does not exist")
				} else {
					return log.Fatalf("cannot read config file: %v", err)
				}
			}
		}

		if c.GlobalIsSet("debug") {
			log.Verbose = c.GlobalBool("debug")
		}
		if log.Verbose {
			log.Info("logger: verbose mode")
		}

		if c.Args().Present() {
			conf.RootDir = c.Args().First()
		}
		if conf.RootDir == "" {
			return log.Fatal("root dir must be specified")
		}
		log.Infof("root dir: %s", conf.RootDir)

		return nil
	}

	// SUBCOMMANDS
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
		Before: setupConfig,
		Action: func(c *cli.Context) {
			port, err := strconv.ParseUint(c.String("port"), 10, 16)
			if err != nil {
				log.Fatalf("wrong port: %v", port)
				os.Exit(1)
			}
			if c.IsSet("port") || conf.Port == 0 {
				conf.Port = uint16(port)
			}
			log.Infof("listening on port %v", conf.Port)

			storage, err := storage.NewFsStorage(conf.RootDir)
			if err != nil {
				log.Fatalf("cannot init storage: %v", err)
				os.Exit(1)
			}

			handlers.Storage = storage

			http.Handle("/", handlers.Server)
			if err := http.ListenAndServe(fmt.Sprintf(":%v", conf.Port), nil); err != nil {
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
		Before: setupConfig,
		Action: func(c *cli.Context) {
			createParents := c.Bool("parents")
			if createParents {
				log.Info("would create parent directories if required")
			}

			err := storage.InitFsStorageDirs(conf.RootDir, createParents)
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
