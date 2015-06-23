package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"io/ioutil"

	"vita/note"

	"github.com/gorilla/mux"
)

type any interface{}

func (p *RequestParams) readAs(v any) error {
	return json.Unmarshal(*p, v)
}

func writeJSON(w http.ResponseWriter, data any) error {
	js, err := json.Marshal(data)
	if err != nil {
		return err
	}

	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(js)

	return err
}

// AddFileHandler handles adding attachments
func AddFileHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	idStr := vars["noteId"]
	id, err := note.ParseID(idStr)
	if err != nil || !Storage.NoteExists(id) {
		log.Printf("file upload: unknown note %v", idStr)
		http.Error(w, "unknown note", http.StatusBadRequest)
		return
	}

	if err := r.ParseMultipartForm(10 * 1024 * 1024); err != nil {
		log.Printf("file upload for %v -> parse error: %v", id, err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	file, _, err := r.FormFile("file")
	if err != nil {
		log.Printf("file upload for %v -> form parse error: %v", id, err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	name := r.FormValue("name")

	data, err := ioutil.ReadAll(file)
	if err != nil {
		log.Printf("file upload for %v -> file read error: %v", id, err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	info, err := Storage.AddAttachment(id, name, data)
	if err != nil {
		log.Printf("file upload for %v -> attaching error: %v", id, err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if writeJSON(w, info) != nil {
		log.Printf("file upload for %v -> response error: %v", id, err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	log.Printf("file upload for %v -> attached file %v", id, name)
}

// GetFileHandler handles retrieving attachments
func GetFileHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	idStr := vars["noteId"]
	id, err := note.ParseID(idStr)
	if err != nil || !Storage.NoteExists(id) {
		log.Printf("file read: unknown note %v", idStr)
		http.Error(w, "unknown note", http.StatusBadRequest)
		return
	}

	fileID := vars["fileId"]

	data, err := Storage.GetAttachment(id, fileID)
	if err != nil {
		log.Printf("file read for %v -> read error: %v", id, err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	_, err = w.Write(data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		log.Printf("file read for %v -> write error: %v", id, err)
	}
}

// RemoveFileHandler handles removing attachments
func RemoveFileHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	idStr := vars["noteId"]
	id, err := note.ParseID(idStr)
	if err != nil || !Storage.NoteExists(id) {
		log.Printf("file remove: unknown note %v", idStr)
		http.Error(w, "unknown note", http.StatusBadRequest)
		return
	}

	fileID := vars["fileId"]

	err = Storage.RemoveAttachment(id, fileID)
	if err != nil {
		log.Printf("file remove for %v -> remove error: %v", id, err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	log.Printf("note %v: removed attachment %v", id, fileID)
}

// AssetsHandler serves file assets
func AssetsHandler(w http.ResponseWriter, req *http.Request) {
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
