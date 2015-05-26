package storage

import (
	"errors"
	"time"
)

var errorNoteNotFound = errors.New("note not found")

type virtualStorage struct {
}

func newRecord(id NoteID, name, data string, categories []Category) *Note {
	noteType := Record

	now := NoteTime(time.Now())
	return &Note{
		Type:       &noteType,
		ID:         &id,
		Name:       name,
		Data:       data,
		Categories: categories,
		TsCreated:  &now,
		TsUpdated:  &now,
	}
}

func (l *virtualStorage) getNewID() *NoteID {
	maxID := NoteID(0)

	for id := range records {
		if id > maxID {
			maxID = id
		}
	}

	newID := maxID + 1

	return &newID
}

var records = map[NoteID]*Note{}

// NewStorage create new Storage instance
func NewStorage() Storager {
	for i, rec := range rawData {
		id := NoteID(i)
		records[id] = newRecord(id, rec.Name, rec.Data, rec.Categories)
	}
	return &virtualStorage{}
}

func (l *virtualStorage) GetNotes() []*Note {
	var notes []*Note
	for _, a := range records {
		notes = append(notes, a)
	}

	return notes
}

func (l *virtualStorage) CreateNote(note *Note) {
	now := NoteTime(time.Now())
	note.TsCreated = &now
	note.TsUpdated = &now

	newID := l.getNewID()
	note.ID = newID

	records[*newID] = note
}

func (l *virtualStorage) GetNote(id *NoteID) (*Note, error) {
	note, ok := records[*id]

	if !ok {
		return nil, errorNoteNotFound
	}

	return note, nil
}

func (l *virtualStorage) UpdateNote(newNote *Note) error {
	note, err := l.GetNote(newNote.ID)
	if err != nil {
		return err
	}

	now := NoteTime(time.Now())
	note.TsUpdated = &now

	note.Type = newNote.Type
	note.Name = newNote.Name
	note.Data = newNote.Data
	note.Categories = newNote.Categories

	return nil
}

func (l *virtualStorage) DeleteNote(id *NoteID) error {
	if _, err := l.GetNote(id); err != nil {
		return err
	}

	delete(records, *id)

	return nil
}
