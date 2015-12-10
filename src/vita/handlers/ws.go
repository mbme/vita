package handlers

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/websocket"
	"io"
	"net/http"
	"sync/atomic"
	"vita/log"
)

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

var socketCounter int32 = 0

//WsHandler websocket connection handler
func WsHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Errorf("cannot open websocket: %v", err)
		return
	}

	var id = atomic.AddInt32(&socketCounter, 1)
	log.Infof("websocket: %v open", id)

	for {
		// parse request
		req := &request{}
		if err = conn.ReadJSON(req); err != nil {
			if err == io.ErrUnexpectedEOF {
				log.Errorf("can't parse message: %v", err)
				return
			}

			log.Infof("websocket: %v closed", id)

			return // close websocket
		}

		if req.Method == NoType || req.ID == nil {
			log.Errorf("bad request %s", req)
			return // close websocket
		}

		resp := &response{
			ID: req.ID,
		}

		// process request
		params := RequestParams(req.Params)
		resp.Result, err = processRequest(req.Method, &params)

		if err == nil {
			log.Infof("%v -> ok", req.Method)
		} else {
			errStr := err.Error()
			resp.Error = &errStr
			log.Errorf("%v -> error: %v", req.Method, errStr)
		}

		// write response
		if err = conn.WriteJSON(resp); err != nil {
			log.Errorf("can't write response: %v", err)
		}
	}
}
