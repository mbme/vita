package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"vita/log"

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

func writeErrStr(w http.ResponseWriter, msg string, args ...interface{}) {
	http.Error(w, fmt.Sprintf(msg, args...), http.StatusBadRequest)
}

func writeErr(w http.ResponseWriter, err error) {
	writeErrStr(w, err.Error())
}

// AddFileHandler handles adding attachments
func AddFileHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	typeStr := vars["type"]
	idStr := vars["id"]

	key, err := note.ParseKey(typeStr, idStr)
	if err != nil {
		log.Errorf("error parsing key: %v", err)
		writeErrStr(w, "error parsing key: %v", err)
		return
	}

	if !Storage.NoteExists(key) {
		log.Errorf("file upload: unknown note %v", key)
		writeErrStr(w, "unknown note %v", key)
		return
	}

	if err := r.ParseMultipartForm(10 * 1024 * 1024); err != nil {
		log.Errorf("file upload for %v -> parse error: %v", key, err)
		writeErr(w, err)
		return
	}

	file, _, err := r.FormFile("file")
	if err != nil {
		log.Errorf("file upload for %v -> form parse error: %v", key, err)
		writeErr(w, err)
		return
	}

	name := r.FormValue("name")

	data, err := ioutil.ReadAll(file)
	if err != nil {
		log.Errorf("file upload for %v -> file read error: %v", key, err)
		writeErr(w, err)
		return
	}

	info, err := Storage.AddAttachment(key, name, data)
	if err != nil {
		log.Errorf("file upload for %v -> attaching error: %v", key, err)
		writeErr(w, err)
		return
	}

	if writeJSON(w, info) != nil {
		log.Errorf("file upload for %v -> response error: %v", key, err)
		writeErr(w, err)
	}

	log.Infof("file upload for %v -> attached file %v", key, name)
}

// GetFileHandler handles retrieving attachments
func GetFileHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	typeStr := vars["type"]
	idStr := vars["id"]

	key, err := note.ParseKey(typeStr, idStr)
	if err != nil {
		log.Errorf("error parsing key: %v", err)
		writeErrStr(w, "error parsing key: %v", err)
		return
	}

	if !Storage.NoteExists(key) {
		log.Errorf("file upload: unknown note %v", key)
		writeErrStr(w, "unknown note %v", key)
		return
	}

	fileID := vars["fileId"]

	data, err := Storage.GetAttachment(key, fileID)
	if err != nil {
		log.Errorf("file read for %v -> read error: %v", key, err)
		writeErr(w, err)
		return
	}

	_, err = w.Write(data)
	if err != nil {
		log.Errorf("file read for %v -> write error: %v", key, err)
		writeErr(w, err)
	}
}

// RemoveFileHandler handles removing attachments
func RemoveFileHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	typeStr := vars["type"]
	idStr := vars["id"]

	key, err := note.ParseKey(typeStr, idStr)
	if err != nil {
		log.Errorf("error parsing key: %v", err)
		writeErrStr(w, "error parsing key: %v", err)
		return
	}

	if !Storage.NoteExists(key) {
		log.Errorf("file upload: unknown note %v", key)
		writeErrStr(w, "unknown note %v", key)
		return
	}

	fileID := vars["fileId"]

	err = Storage.RemoveAttachment(key, fileID)
	if err != nil {
		log.Errorf("file remove for %v -> remove error: %v", key, err)
		writeErr(w, err)
		return
	}

	log.Infof("note %v: removed attachment %v", key, fileID)
}
