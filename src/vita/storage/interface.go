package storage

import (
	"errors"
	"vita/note"
)

var (
	errorNoteNotFound            = errors.New("note not found")
	errorBadNoteType             = errors.New("bad note type")
	errorBadNoteID               = errors.New("bad note id")
	errorBadNoteName             = errors.New("bad note name")
	errorNoCategories            = errors.New("missing categories")
	errorBadAttachmentName       = errors.New("bad attachment name")
	errorAttachmentNotFound      = errors.New("attachment not found")
	errorAttachmentAlreadyExists = errors.New("attachment already exists")
)

// Storager general storage interface
type Storager interface {
	ListNotes() []*note.Info

	AddNote(noteType note.Type, name string, categories []note.Category) (note.ID, error)
	GetNote(id note.ID) (*note.Note, error)
	UpdateNote(id note.ID, name string, data string, categories []note.Category) error
	RemoveNote(id note.ID) error
	NoteExists(id note.ID) bool

	AddAttachment(id note.ID, fileName string, data []byte) (*note.FileInfo, error)
	GetAttachment(id note.ID, fileName string) ([]byte, error)
	RemoveAttachment(id note.ID, fileName string) error
}
