package storage

import (
	"strings"
	"vita/log"

	"os"
	"path"
	"vita/note"
	"vita/utils"
)

const filePerm = 0644
const dirPerm = 0755

// FS STORAGE

type fsStorage struct {
	base    string
	records map[note.Key]*note.Info
}

// InitFsStorageDirs creates require directories for vita FS storage
func InitFsStorageDirs(basePath string, createParents bool) error {
	realPath, err := utils.AbsPath(basePath)
	if err != nil {
		return err
	}

	for _, noteType := range note.Types {
		dir := path.Join(realPath, noteType.String())
		var err error
		if createParents {
			err = os.MkdirAll(dir, dirPerm)
		} else {
			err = os.Mkdir(dir, dirPerm)
		}

		if err != nil {
			return err
		}
	}

	return nil
}

// NewFsStorage create new Storager backed with file system
func NewFsStorage(basePath string) (Storager, error) {
	realPath, err := utils.AbsPath(basePath)
	if err != nil {
		return nil, err
	}

	storage := &fsStorage{
		base:    realPath,
		records: make(map[note.Key]*note.Info),
	}

	for _, noteType := range note.Types {
		files, err := utils.ListFiles(path.Join(realPath, noteType.String()), false)
		if err != nil {
			return nil, err
		}

		// read notes
		for _, f := range files {
			note, err := readNoteInfo(noteType, f)
			if err != nil {
				if err != errorNotNote {
					log.Errorf("%v", err)
				}
				continue
			}
			if storage.NoteExists(note.Key) {
				log.Warnf("duplicate note %v: %v", note.Key, note)
				continue
			}
			storage.records[note.Key] = note
		}

		// read attachments
		for _, f := range files {
			noteID, attachment, err := readAttachmentInfo(noteType, f)
			if err != nil {
				if err != errorNotAttachment {
					log.Error(err)
				}
				continue
			}
			note, ok := storage.records[noteID]
			if !ok {
				log.Warnf("attachment for unknown note %v", noteID)
				continue
			}

			note.Attachments = append(note.Attachments, attachment)
		}
	}

	log.Infof("loaded %d notes", len(storage.records))

	return storage, nil
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

	if _, err := s.writeNote(note); err != nil {
		return err
	}

	// we should remove old file if file name changed
	if getNoteFile(oldInfo) != getNoteFile(note.ToInfo()) {
		if err := s.removeNote(oldInfo); err != nil {
			log.Warnf("cannot remove old note %v file %v", oldInfo, err)
		}
	}

	oldInfo.Name = name
	oldInfo.Categories = categories

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
			log.Errorf("error while removing note %v attachment %v: %v", key, attachment, err)
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
		log.Warnf("attaching empty file %v to note %v", fileName, key)
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
