package storage

import (
	"log"
	"path"
	"strings"

	"github.com/mbme/vita/go/note"
)

// FS STORAGE

type fsStorage struct {
	base    string
	records map[note.ID]*note.Info
}

// NewFsStorage create new Storager backed with file system
func NewFsStorage(basePath string) Storager {
	storage := &fsStorage{
		base:    basePath,
		records: make(map[note.ID]*note.Info),
	}

	// read all note types
	for _, t := range note.Types {
		files, err := listFiles(path.Join(basePath, string(t)), false)
		if err != nil {
			panic(err)
		}

		// read notes
		for _, f := range files {
			note, err := readNoteInfo(t, f)
			if err != nil {
				if err != errorNotNote {
					log.Println(err)
				}
				continue
			}
			if _, ok := storage.records[note.ID]; ok {
				log.Printf("warn: duplicate note %v: %v", note.ID, note)
				continue
			}
			storage.records[note.ID] = note
		}

		// read attachments
		for _, f := range files {
			noteID, attachment, err := readAttachmentInfo(f)
			if err != nil {
				if err != errorNotAttachment {
					log.Println(err)
				}
				continue
			}
			note, ok := storage.records[noteID]
			if !ok {
				log.Printf("attachment for unknown note %v", noteID)
				continue
			}

			note.Attachments = append(note.Attachments, attachment)
		}
	}

	log.Printf("loaded %d notes", len(storage.records))

	return storage
}

func (s *fsStorage) ListNotes() []*note.Info {
	list := make([]*note.Info, len(s.records))

	pos := 0
	for _, note := range s.records {
		list[pos] = note
		pos++
	}

	return list
}

func (s *fsStorage) NoteExists(id note.ID) bool {
	_, ok := s.records[id]

	return ok
}

func (s *fsStorage) AddNote(noteType note.Type, name string, categories []note.Category) (note.ID, error) {
	newID := s.nextID()

	if !noteType.IsValid() {
		return note.NotID, errorBadNoteType
	}

	name = strings.TrimSpace(name)
	if len(name) == 0 {
		return note.NotID, errorBadNoteName
	}

	categories, err := preprocessCategories(categories)
	if err != nil {
		return note.NotID, err
	}

	fileInfo, err := s.writeNote((&note.Info{
		Type:       noteType,
		ID:         s.nextID(),
		Name:       name,
		Categories: categories,
	}).ToNote())

	if err != nil {
		return note.NotID, err
	}

	info, err := readNoteInfo(noteType, fileInfo)
	if err != nil {
		return note.NotID, err
	}

	s.records[newID] = info

	return newID, nil
}

func (s *fsStorage) GetNote(id note.ID) (*note.Note, error) {
	if id == note.NotID {
		return nil, errorBadNoteID
	}

	info, ok := s.records[id]

	if !ok {
		return nil, errorNoteNotFound
	}

	return s.readNote(info)
}

func (s *fsStorage) UpdateNote(id note.ID, name string, data string, categories []note.Category) error {
	if id == note.NotID {
		return errorBadNoteID
	}

	oldInfo, ok := s.records[id]
	if !ok {
		return errorNoteNotFound
	}

	name = strings.TrimSpace(name)
	if len(name) == 0 {
		return errorBadNoteName
	}

	data = strings.TrimSpace(data)

	categories, err := preprocessCategories(categories)
	if err != nil {
		return err
	}

	note := oldInfo.ToNote()
	note.Name = name
	note.Data = data
	note.Categories = categories

	fileInfo, err := s.writeNote(note)
	if err != nil {
		return err
	}

	// we should remove old file if title changed
	if getNoteFile(oldInfo) != getNoteFile(note.ToInfo()) {
		if err := s.removeNote(oldInfo); err != nil {
			log.Printf("warn: cannot remove old note %v file %v", oldInfo, err)
		}
	}

	newInfo, err := readNoteInfo(oldInfo.Type, fileInfo)
	if err != nil {
		return err
	}

	note.Info = newInfo

	return nil
}

func (s *fsStorage) RemoveNote(id note.ID) error {
	if id == note.NotID {
		return errorBadNoteID
	}

	info, ok := s.records[id]

	if !ok {
		return errorNoteNotFound
	}

	for _, attachment := range info.Attachments {
		if err := s.RemoveAttachment(id, attachment.Name); err != nil {
			log.Printf("error while removing note %v attachment %v: %v", id, attachment, err)
		}
	}

	if err := s.removeNote(info); err != nil {
		return err
	}

	delete(s.records, id)

	return nil
}

func (s *fsStorage) AddAttachment(id note.ID, fileName string, data []byte) (*note.FileInfo, error) {
	if id == note.NotID {
		return nil, errorBadNoteID
	}

	info, ok := s.records[id]

	if !ok {
		return nil, errorNoteNotFound
	}

	if info.HasAttachment(fileName) {
		return nil, errorAttachmentAlreadyExists
	}

	fileInfo, err := s.writeAttachment(info, fileName, data)
	if err != nil {
		return nil, err
	}

	_, attachmentInfo, err := readAttachmentInfo(fileInfo)
	if err != nil {
		return nil, err
	}

	info.AddAttachment(attachmentInfo)

	return attachmentInfo, nil
}

func (s *fsStorage) GetAttachment(id note.ID, fileName string) ([]byte, error) {
	if id == note.NotID {
		return nil, errorBadNoteID
	}

	info, ok := s.records[id]

	if !ok {
		return nil, errorNoteNotFound
	}

	if !info.HasAttachment(fileName) {
		return nil, errorAttachmentNotFound
	}

	return s.readAttachment(info, fileName)
}

func (s *fsStorage) RemoveAttachment(id note.ID, fileName string) error {
	if id == note.NotID {
		return errorBadNoteID
	}

	info, ok := s.records[id]

	if !ok {
		return errorNoteNotFound
	}

	if !info.HasAttachment(fileName) {
		return errorAttachmentNotFound
	}

	if err := s.removeAttachment(info, fileName); err != nil {
		return err
	}

	info.RemoveAttachment(fileName)

	return nil
}
