package main

import (
	"bytes"
	"log"
	"os"
	"os/signal"
	"text/template"
)

type indexHTMLConfig struct {
	Styles string
	App    string
}

var indexTpl = template.Must(template.New("index.html").Parse(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">

        <link href="{{.Styles}}" rel="stylesheet"/>
    </head>
    <body>
        <div class="Top-Panel"></div>
        <div class="Root">
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="Overlay"></div>

        <script src="{{.App}}"></script>
    </body>
</html>
`))

func renderIndexHTML(data interface{}) []byte {
	var b bytes.Buffer
	if err := indexTpl.Execute(&b, data); err != nil {
		panic(err)
	}

	return b.Bytes()
}

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
