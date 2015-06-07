package storage

import "errors"

// Storager general storage interface
type Storager interface {
	ListNotes() []*Note

	AddNote(*Note)
	GetNote(*NoteID) (*Note, error)
	UpdateNote(*Note) error
	RemoveNote(*NoteID) error
	NoteExists(*NoteID) bool

	AddAttachment(*NoteID, string, []byte) (*AttachmentInfo, error)
	GetAttachment(*NoteID, string) ([]byte, error)
	RemoveAttachment(*NoteID, string) error
}

var (
	errorNoteNotFound            = errors.New("note not found")
	errorAttachmentNotFound      = errors.New("attachment not found")
	errorAttachmentAlreadyExists = errors.New("attachment already exists")
)
