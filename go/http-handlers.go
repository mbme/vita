package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"

	"fmt"

	"io/ioutil"

	s "github.com/mbme/vita/go/storage"

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
func wsHandler(w http.ResponseWriter, r *http.Request) {
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

func fileHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	idStr := vars["noteId"]
	id, err := s.ParseNoteID(idStr)
	if err != nil || !storage.NoteExists(id) {
		log.Printf("file upload: unknown note %v", idStr)
		return
	}

	if err := r.ParseMultipartForm(10 * 1024 * 1024); err != nil {
		log.Printf("file upload for %v -> parse error: %v", id, err)
		return
	}

	file, handler, err := r.FormFile("file")
	if err != nil {
		log.Printf("file upload for %v -> form parse error: %v", id, err)
		return
	}

	name := handler.Filename

	data, err := ioutil.ReadAll(file)
	if err != nil {
		log.Printf("file upload for %v -> file read error: %v", id, err)
		return
	}

	info, err := storage.AddAttachment(id, name, data)
	if err != nil {
		log.Printf("file upload for %v -> attaching error: %v", id, err)
		return
	}

	if writeJSON(w, info) != nil {
		log.Printf("file upload for %v -> response error: %v", id, err)
	}
}
