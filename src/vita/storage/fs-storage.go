package storage

import (
	"log"
	"strings"

	"path"
	"vita/note"
)

// FS STORAGE

type fsStorage struct {
	base    string
	records map[note.Key]*note.Info
}

// NewFsStorage create new Storager backed with file system
func NewFsStorage(basePath string) Storager {
	storage := &fsStorage{
		base:    basePath,
		records: make(map[note.Key]*note.Info),
	}

	for _, noteType := range note.Types {
		files, err := listFiles(path.Join(basePath, noteType.String()), false)
		if err != nil {
			log.Fatal(err)
		}

		// read notes
		for _, f := range files {
			note, err := readNoteInfo(noteType, f)
			if err != nil {
				if err != errorNotNote {
					log.Println(err)
				}
				continue
			}
			if storage.NoteExists(note.Key) {
				log.Printf("warn: duplicate note %v: %v", note.Key, note)
				continue
			}
			storage.records[note.Key] = note
		}

		// read attachments
		for _, f := range files {
			noteID, attachment, err := readAttachmentInfo(noteType, f)
			if err != nil {
				if err != errorNotAttachment {
					log.Println(err)
				}
				continue
			}
			note, ok := storage.records[noteID]
			if !ok {
				log.Printf("warn: attachment for unknown note %v", noteID)
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

func (s *fsStorage) NoteExists(key note.Key) bool {
	_, ok := s.records[key]

	return ok
}

func (s *fsStorage) AddNote(noteType note.Type, name string, categories []note.Category) (note.Key, error) {
	key := s.nextKey(noteType)
	if err := key.Validate(); err != nil {
		return note.NoKey, err
	}

	name = strings.TrimSpace(name)
	if len(name) == 0 {
		return note.NoKey, errorBadNoteName
	}

	categories, err := preprocessCategories(categories)
	if err != nil {
		return note.NoKey, err
	}

	fileInfo, err := s.writeNote((&note.Info{
		Key:        key,
		Name:       name,
		Categories: categories,
	}).ToNote())

	if err != nil {
		return note.NoKey, err
	}

	info, err := readNoteInfo(noteType, fileInfo)
	if err != nil {
		return note.NoKey, err
	}

	s.records[key] = info

	return key, nil
}

func (s *fsStorage) GetNote(key note.Key) (*note.Note, error) {
	err := key.Validate()
	if err != nil {
		return nil, err
	}

	info, ok := s.records[key]
	if !ok {
		return nil, errorNoteNotFound
	}

	return s.readNote(info)
}

func (s *fsStorage) UpdateNote(key note.Key, name string, data string, categories []note.Category) error {
	err := key.Validate()
	if err != nil {
		return err
	}

	oldInfo, ok := s.records[key]
	if !ok {
		return errorNoteNotFound
	}

	name = strings.TrimSpace(name)
	if len(name) == 0 {
		return errorBadNoteName
	}

	data = strings.TrimSpace(data)

	categories, err = preprocessCategories(categories)
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

	newInfo, err := readNoteInfo(key.Type, fileInfo)
	if err != nil {
		return err
	}

	note.Info = newInfo

	s.records[key] = newInfo

	return nil
}

func (s *fsStorage) RemoveNote(key note.Key) error {
	err := key.Validate()
	if err != nil {
		return err
	}

	info, ok := s.records[key]
	if !ok {
		return errorNoteNotFound
	}

	for _, attachment := range info.Attachments {
		if err := s.RemoveAttachment(key, attachment.Name); err != nil {
			log.Printf("error while removing note %v attachment %v: %v", key, attachment, err)
		}
	}

	if err := s.removeNote(info); err != nil {
		return err
	}

	delete(s.records, key)

	return nil
}

func (s *fsStorage) AddAttachment(key note.Key, fileName string, data []byte) (*note.FileInfo, error) {
	err := key.Validate()
	if err != nil {
		return nil, err
	}

	info, ok := s.records[key]
	if !ok {
		return nil, errorNoteNotFound
	}

	fileName = strings.TrimSpace(fileName)
	if fileName == "" {
		return nil, errorBadAttachmentName
	}

	if len(data) == 0 {
		log.Printf("warn: attaching empty file %v to note %v", fileName, key)
	}

	if info.HasAttachment(fileName) {
		return nil, errorAttachmentAlreadyExists
	}

	fileInfo, err := s.writeAttachment(info, fileName, data)
	if err != nil {
		return nil, err
	}

	_, attachmentInfo, err := readAttachmentInfo(key.Type, fileInfo)
	if err != nil {
		return nil, err
	}

	info.AddAttachment(attachmentInfo)

	return attachmentInfo, nil
}

func (s *fsStorage) GetAttachment(key note.Key, fileName string) ([]byte, error) {
	err := key.Validate()
	if err != nil {
		return nil, err
	}

	info, ok := s.records[key]
	if !ok {
		return nil, errorNoteNotFound
	}

	fileName = strings.TrimSpace(fileName)
	if fileName == "" {
		return nil, errorBadAttachmentName
	}

	if !info.HasAttachment(fileName) {
		return nil, errorAttachmentNotFound
	}

	return s.readAttachment(info, fileName)
}

func (s *fsStorage) RemoveAttachment(key note.Key, fileName string) error {
	err := key.Validate()
	if err != nil {
		return err
	}

	info, ok := s.records[key]
	if !ok {
		return errorNoteNotFound
	}

	fileName = strings.TrimSpace(fileName)
	if fileName == "" {
		return errorBadAttachmentName
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
