package handlers

import (
	"encoding/json"
	"errors"

	"vita/log"

	"vita/note"
	s "vita/storage"
)

var (
	errorNoHandler = errors.New("no handler for request")
	errorBadParams = errors.New("malformed request params")
)

//RequestMethod types of client requests
type RequestMethod string

//RequestParams raw parameters
type RequestParams json.RawMessage

//Possible requests
const (
	NotesListRead RequestMethod = "notes-list-read"
	NoteRead      RequestMethod = "note-read"
	NoteCreate    RequestMethod = "note-create"
	NoteUpdate    RequestMethod = "note-update"
	NoteDelete    RequestMethod = "note-delete"
	NoType        RequestMethod = ""
)

// Storage which should be used by handlers
var Storage s.Storager

var handlers = map[RequestMethod]func(*RequestParams) (any, error){
	NotesListRead: func(_ *RequestParams) (any, error) {
		return Storage.ListNotes(), nil
	},

	NoteRead: func(params *RequestParams) (any, error) {
		var key note.Key
		if err := params.readAs(&key); err != nil {
			log.Errorf("cannot parse key: %v", err)
			return nil, errorBadParams
		}

		return Storage.GetNote(key)
	},

	NoteCreate: func(params *RequestParams) (any, error) {
		var dto addNoteDTO
		if err := params.readAs(&dto); err != nil {
			log.Errorf("cannot parse params: %v", err)
			return nil, errorBadParams
		}

		key, err := Storage.AddNote(dto.Type, dto.Name, dto.Categories)
		if err != nil {
			return nil, err
		}

		return Storage.GetNote(key)
	},

	NoteUpdate: func(params *RequestParams) (any, error) {
		var dto updateNoteDTO
		if err := params.readAs(&dto); err != nil {
			log.Errorf("cannot parse params: %v", err)
			return nil, errorBadParams
		}

		if err := Storage.UpdateNote(dto.Key, dto.Name, dto.Data, dto.Categories); err != nil {
			return nil, err
		}

		return Storage.GetNote(dto.Key)
	},

	NoteDelete: func(params *RequestParams) (any, error) {
		var key note.Key
		if err := params.readAs(&key); err != nil {
			log.Errorf("cannot parse key: %v", err)
			return nil, errorBadParams
		}

		if err := Storage.RemoveNote(key); err != nil {
			return nil, err
		}

		return key, nil
	},
}

func processRequest(reqType RequestMethod, params *RequestParams) (any, error) {
	handler, ok := handlers[reqType]

	if !ok {
		return nil, errorNoHandler
	}

	return handler(params)
}
