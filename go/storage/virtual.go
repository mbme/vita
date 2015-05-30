package storage

import (
	"errors"
	"net/http"
	"time"
)

var (
	errorNoteNotFound            = errors.New("note not found")
	errorAttachmentNotFound      = errors.New("attachment not found")
	errorAttachmentAlreadyExists = errors.New("attachment already exists")
)

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

type attachment struct {
	info *AttachmentInfo
	data []byte
}

var records = map[NoteID]*Note{}
var attachments = map[NoteID][]*attachment{}

func listAttachments(id *NoteID) []*attachment {
	result, ok := attachments[*id]

	if ok {
		return result
	}

	return []*attachment{}
}

func listAttachmentsInfo(id *NoteID) []*AttachmentInfo {
	list := listAttachments(id)
	noteAttachments := make([]*AttachmentInfo, len(list))

	for i, attachment := range list {
		noteAttachments[i] = attachment.info
	}

	return noteAttachments
}

func getAttachment(attachments []*attachment, name string) (*attachment, int, error) {
	for i, attachment := range attachments {
		if attachment.info.Name == name {
			return attachment, i, nil
		}
	}

	return nil, 0, errorAttachmentNotFound
}

// NewStorage create new Storage instance
func NewStorage() Storager {
	for i, rec := range rawData {
		id := NoteID(i)
		records[id] = newRecord(id, rec.Name, rec.Data, rec.Categories)
	}
	return &virtualStorage{}
}

func (l *virtualStorage) ListNotes() []*Note {
	var notes []*Note
	for _, a := range records {
		notes = append(notes, a)
	}

	return notes
}

func (l *virtualStorage) NoteExists(id *NoteID) bool {
	_, ok := records[*id]

	return ok
}

func (l *virtualStorage) AddNote(note *Note) {
	now := NoteTime(time.Now())
	note.TsCreated = &now
	note.TsUpdated = &now

	newID := l.getNewID()
	note.ID = newID

	note.Attachments = listAttachmentsInfo(newID)

	records[*newID] = note
}

func (l *virtualStorage) GetNote(id *NoteID) (*Note, error) {
	note, ok := records[*id]

	if !ok {
		return nil, errorNoteNotFound
	}

	note.Attachments = listAttachmentsInfo(id)

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

func (l *virtualStorage) RemoveNote(id *NoteID) error {
	if _, err := l.GetNote(id); err != nil {
		return err
	}

	delete(records, *id)
	delete(attachments, *id) // delete record attachments

	return nil
}

func (l *virtualStorage) AddAttachment(id *NoteID, name string, data []byte) (*AttachmentInfo, error) {
	_, err := l.GetNote(id)
	if err != nil {
		return nil, err
	}

	items := listAttachments(id)

	if _, _, err := getAttachment(items, name); err == nil {
		return nil, errorAttachmentAlreadyExists
	}

	now := NoteTime(time.Now())
	mime := http.DetectContentType(data)
	info := &AttachmentInfo{name, &now, mime, len(data), AttachmentTypeByMimeType(mime)}

	attachments[*id] = append(items, &attachment{info, data})

	return info, nil
}

func (l *virtualStorage) GetAttachment(id *NoteID, name string) ([]byte, error) {
	_, err := l.GetNote(id)
	if err != nil {
		return nil, err
	}

	attachment, _, err := getAttachment(listAttachments(id), name)
	if err != nil {
		return nil, err
	}

	return attachment.data, nil
}

func (l *virtualStorage) RemoveAttachment(id *NoteID, name string) error {
	_, err := l.GetNote(id)
	if err != nil {
		return err
	}

	items := listAttachments(id)

	_, pos, err := getAttachment(items, name)
	if err != nil {
		return err
	}

	attachments[*id] = append(items[:pos], items[pos+1:]...)

	return nil
}
