package main

import (
	"log"
	"net/http"
	"text/template"
)

var indexTpl, _ = template.New("index.html").Parse(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">

        <link href="/main.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="Top-Panel"></div>
        <div class="Root">
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="Overlay"></div>

        <script src="/app.js"></script>
    </body>
</html>
`)

func indexHandler(w http.ResponseWriter, req *http.Request) {
	if req.URL.Path != "/" {
		http.NotFound(w, req)
		return
	}

	if err := indexTpl.Execute(w, nil); err != nil {
		log.Printf("can't serve index.html: %v", err)
	}
}
