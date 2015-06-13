package storage

import "errors"
import "github.com/mbme/vita/go/note"

var (
	errorNoteNotFound            = errors.New("note not found")
	errorAttachmentNotFound      = errors.New("attachment not found")
	errorAttachmentAlreadyExists = errors.New("attachment already exists")
)

// Storager general storage interface
type Storager interface {
	ListNotes() []*note.Info

	AddNote(*note.Note) error
	GetNote(*note.ID) (*note.Note, error)
	UpdateNote(*note.Note) error
	RemoveNote(*note.ID) error
	NoteExists(*note.ID) bool

	AddAttachment(*note.ID, string, []byte) (*note.FileInfo, error)
	GetAttachment(*note.ID, string) ([]byte, error)
	RemoveAttachment(*note.ID, string) error
}
