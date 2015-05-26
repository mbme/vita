package storage

// Storager general storage interface
type Storager interface {
	GetNotes() []*Note
	GetNote(*NoteID) (*Note, error)
	CreateNote(*Note)
	UpdateNote(*Note) error
	DeleteNote(*NoteID) error
}
