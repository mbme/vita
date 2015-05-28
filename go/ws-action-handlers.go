package main

import (
	"encoding/json"
	"errors"

	"log"

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

var storage = s.NewStorage()

type noteInfo struct {
	ID         s.NoteID     `json:"id"`
	Type       s.NoteType   `json:"type"`
	Name       string       `json:"name"`
	Categories []s.Category `json:"categories"`
	TsCreated  *s.NoteTime  `json:"ts_created"`
	TsUpdated  *s.NoteTime  `json:"ts_updated"`
}

func toNoteInfo(note *s.Note) *noteInfo {
	return &noteInfo{
		ID:         *note.ID,
		Type:       *note.Type,
		Name:       note.Name,
		Categories: note.Categories,
		TsCreated:  note.TsCreated,
		TsUpdated:  note.TsUpdated,
	}
}

func getNotesList() []*noteInfo {
	notes := storage.ListNotes()
	infos := make([]*noteInfo, len(notes))
	for i, note := range notes {
		infos[i] = toNoteInfo(note)
	}

	return infos
}

var handlers = map[RequestMethod]func(*RequestParams) (any, error){
	NotesListRead: func(_ *RequestParams) (any, error) {
		return getNotesList(), nil
	},

	NoteRead: func(params *RequestParams) (any, error) {
		id := new(s.NoteID)
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
		note := &s.Note{}
		if err := params.readAs(note); err != nil {
			log.Printf("error parsing params: %v", err)
			return nil, errorBadParams
		}

		errors := note.Validate()
		if note.ID != nil {
			errors = append(errors, "id is not nil")
		}

		if note.TsCreated != nil {
			errors = append(errors, "creation timestamp is not nil")
		}

		if note.TsUpdated != nil {
			errors = append(errors, "creation timestamp is not nil")
		}

		if len(errors) > 0 {
			log.Printf("error parsing params: %v", errors)
			return errors, errorBadParams
		}

		storage.AddNote(note)

		return note, nil
	},

	NoteUpdate: func(params *RequestParams) (any, error) {
		note := &s.Note{}
		if err := params.readAs(note); err != nil {
			log.Printf("error parsing params: %v", err)
			return nil, errorBadParams
		}

		errors := note.Validate()
		if note.ID == nil {
			errors = append(errors, "missing id")
		}

		if note.TsCreated != nil {
			errors = append(errors, "creation timestamp is not nil")
		}

		if note.TsUpdated != nil {
			errors = append(errors, "creation timestamp is not nil")
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
		id := new(s.NoteID)
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
