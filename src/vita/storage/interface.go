package storage

import (
	"errors"
	"vita/note"
)

var (
	errorNoteNotFound            = errors.New("note not found")
	errorBadNoteType             = errors.New("bad note type")
	errorBadNoteName             = errors.New("bad note name")
	errorNoCategories            = errors.New("missing categories")
	errorBadAttachmentName       = errors.New("bad attachment name")
	errorAttachmentNotFound      = errors.New("attachment not found")
	errorAttachmentAlreadyExists = errors.New("attachment already exists")
)

// Storager general storage interface
type Storager interface {
	ListNotes() []*note.Info

	AddNote(noteType note.Type, name string, categories []note.Category) (note.Key, error)
	GetNote(key note.Key) (*note.Note, error)
	UpdateNote(key note.Key, name string, data string, categories []note.Category) error
	RemoveNote(key note.Key) error
	NoteExists(key note.Key) bool

	AddAttachment(key note.Key, fileName string, data []byte) (*note.FileInfo, error)
	GetAttachment(key note.Key, fileName string) ([]byte, error)
	RemoveAttachment(key note.Key, fileName string) error
}
