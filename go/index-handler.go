package main

import (
	"io"
	"log"
	"text/template"
)

var indexTpl, _ = template.New("index.html").Parse(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">

        <link href="/styles/main.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="Top-Panel"></div>
        <div class="Root">
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="Overlay"></div>

        <script src="/dist/app.js"></script>
    </body>
</html>
`)

func writeIndexHTML(w io.Writer) {
	if err := indexTpl.Execute(w, nil); err != nil {
		log.Printf("can't serve index.html: %v", err)
	}
}
