package handlers

import (
	"encoding/json"
	"io"
	"log"
	"net/http"

	"fmt"

	"io/ioutil"

	"vita/note"

	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
)

type any interface{}

func (p *RequestParams) readAs(v any) error {
	return json.Unmarshal(*p, v)
}

// JSON RPC
type requestID uint32

type request struct {
	Method RequestMethod   `json:"method"`
	Params json.RawMessage `json:"params"`
	ID     *requestID      `json:"id"`
}

func (req *request) String() string {
	return fmt.Sprintf("[ id: %v | method: %v ]", req.ID, req.Method)
}

type response struct {
	Result any        `json:"result"`
	Error  *string    `json:"error"`
	ID     *requestID `json:"id"`
}

// HTTP websocket upgrader
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	// allow all origins
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

//WsHandler websocket connection handler
func WsHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	log.Println("connection: open")

	for {
		// parse request
		req := &request{}
		if err = conn.ReadJSON(req); err != nil {
			if err == io.EOF {
				log.Println("connection: closed")
				return
			}

			log.Printf("can't parse message: %v", err)
			return // close websocket
		}

		if req.Method == NoType || req.ID == nil {
			log.Printf("bad request %s", req)
			return // close websocket
		}

		resp := &response{
			ID: req.ID,
		}

		// process request
		params := RequestParams(req.Params)
		resp.Result, err = processRequest(req.Method, &params)

		if err == nil {
			log.Printf("%v -> ok", req.Method)
		} else {
			errStr := err.Error()
			resp.Error = &errStr
			log.Printf("%v -> error: %v", req.Method, errStr)
		}

		// write response
		if err = conn.WriteJSON(resp); err != nil {
			log.Printf("can't write response: %v", err)
		}
	}
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
	if err != nil || !storage.NoteExists(id) {
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

	info, err := storage.AddAttachment(id, name, data)
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
	if err != nil || !storage.NoteExists(id) {
		log.Printf("file read: unknown note %v", idStr)
		http.Error(w, "unknown note", http.StatusBadRequest)
		return
	}

	fileID := vars["fileId"]

	data, err := storage.GetAttachment(id, fileID)
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
	if err != nil || !storage.NoteExists(id) {
		log.Printf("file remove: unknown note %v", idStr)
		http.Error(w, "unknown note", http.StatusBadRequest)
		return
	}

	fileID := vars["fileId"]

	err = storage.RemoveAttachment(id, fileID)
	if err != nil {
		log.Printf("file remove for %v -> remove error: %v", id, err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	log.Printf("note %v: removed attachment %v", id, fileID)
}
