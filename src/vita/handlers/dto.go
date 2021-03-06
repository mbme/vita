package handlers

import "vita/note"

type addNoteDTO struct {
	Type       note.Type       `json:"type"`
	Name       string          `json:"name"`
	Data       string          `json:"data"`
	Categories []note.Category `json:"categories"`
}

type updateNoteDTO struct {
	Key        note.Key         `json:"key"`
	Name       *string          `json:"name"`
	Data       *string          `json:"data"`
	Categories *[]note.Category `json:"categories"`
}
