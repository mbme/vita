package handlers

import (
	"net/http"
	"vita/log"
	"vita/note"
)

// StaticServer serves static bundled webui files
type StaticServer struct{}

func (s *StaticServer) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	path := req.URL.Path[1:]
	if path == "" {
		path = "index.html"
	}

	data, err := Asset(path)
	if err != nil {
		log.Errorf("GET %s -> NOT FOUND", path)
		http.NotFound(w, req)
		return
	}

	mime := note.GetMimeType(path)
	w.Header().Set("Content-Type", mime)

	if _, err := w.Write(data); err != nil {
		log.Errorf("GET %s -> err: INTERNAL SERVER ERROR %v", path, err)
	}
}
