package handlers

import (
	"encoding/json"
	"errors"

	"log"

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

var storage = s.NewFsStorage("/tmp/vita")

var handlers = map[RequestMethod]func(*RequestParams) (any, error){
	NotesListRead: func(_ *RequestParams) (any, error) {
		return storage.ListNotes(), nil
	},

	NoteRead: func(params *RequestParams) (any, error) {
		id := new(note.ID)
		if err := params.readAs(id); err != nil {
			log.Printf("error parsing params: %v", err)
			return nil, errorBadParams
		}

		if id == nil {
			log.Println("error parsing params: can't parse id")
			return nil, errorBadParams
		}

		note, err := storage.GetNote(*id)
		if err != nil {
			log.Printf("can't find note %s", *id)
			return nil, err
		}

		return note, nil
	},

	NoteCreate: func(params *RequestParams) (any, error) {
		dto := &addNoteDTO{}
		if err := params.readAs(dto); err != nil {
			log.Printf("error parsing params: %v", err)
			return nil, errorBadParams
		}

		id, err := storage.AddNote(dto.Type, dto.Name, dto.Categories)
		if err != nil {
			return nil, err
		}

		return storage.GetNote(id)
	},

	NoteUpdate: func(params *RequestParams) (any, error) {
		dto := &updateNoteDTO{}
		if err := params.readAs(dto); err != nil {
			log.Printf("error parsing params: %v", err)
			return nil, errorBadParams
		}

		if err := storage.UpdateNote(dto.ID, dto.Name, dto.Data, dto.Categories); err != nil {
			return nil, err
		}

		return storage.GetNote(dto.ID)
	},

	NoteDelete: func(params *RequestParams) (any, error) {
		id := new(note.ID)
		if err := params.readAs(id); err != nil {
			log.Printf("error parsing params: %v", err)
			return nil, errorBadParams
		}

		if id == nil {
			log.Println("error parsing params: can't parse id")
			return nil, errorBadParams
		}

		if err := storage.RemoveNote(*id); err != nil {
			return nil, err
		}

		return id, nil
	},
}

func processRequest(reqType RequestMethod, params *RequestParams) (any, error) {
	handler, ok := handlers[reqType]

	if !ok {
		return nil, errorNoHandler
	}

	return handler(params)
}
