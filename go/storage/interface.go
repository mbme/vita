package storage

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
