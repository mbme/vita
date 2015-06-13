package handlers

import "github.com/mbme/vita/go/note"

type addNoteDTO struct {
	Type       note.Type       `json:"type"`
	Name       string          `json:"name"`
	Categories []note.Category `json:"categories"`
}

type updateNoteDTO struct {
	ID         note.ID         `json:"id"`
	Name       string          `json:"name"`
	Data       string          `json:"data"`
	Categories []note.Category `json:"categories"`
}
