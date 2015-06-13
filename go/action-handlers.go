package main

import (
	"encoding/json"
	"errors"

	"log"

	"github.com/mbme/vita/go/note"
	s "github.com/mbme/vita/go/storage"
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

	NoteRead   = "note-read"
	NoteCreate = "note-create"
	NoteUpdate = "note-update"
	NoteDelete = "note-delete"

	NoType = ""
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

		note, err := storage.GetNote(id)
		if err != nil {
			log.Printf("can't find note %s", id)
			return nil, err
		}

		return note, nil
	},

	NoteCreate: func(params *RequestParams) (any, error) {
		note := &note.Note{}
		if err := params.readAs(note); err != nil {
			log.Printf("error parsing params: %v", err)
			return nil, errorBadParams
		}

		errors := note.Validate()
		if note.ID != nil {
			errors = append(errors, "id is not nil")
		}

		if note.Timestamp != nil {
			errors = append(errors, "timestamp is not nil")
		}

		if len(errors) > 0 {
			log.Printf("error parsing params: %v", errors)
			return errors, errorBadParams
		}

		if err := storage.AddNote(note); err != nil {
			return nil, err
		}

		return note, nil
	},

	NoteUpdate: func(params *RequestParams) (any, error) {
		note := &note.Note{}
		if err := params.readAs(note); err != nil {
			log.Printf("error parsing params: %v", err)
			return nil, errorBadParams
		}

		errors := note.Validate()
		if note.ID == nil {
			errors = append(errors, "missing id")
		}

		if note.Timestamp != nil {
			errors = append(errors, "timestamp is not nil")
		}

		if len(errors) > 0 {
			log.Printf("error parsing params: %v", errors)
			return errors, errorBadParams
		}

		if err := storage.UpdateNote(note); err != nil {
			return nil, err
		}

		return note, nil
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

		if err := storage.RemoveNote(id); err != nil {
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
