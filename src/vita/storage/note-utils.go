package storage

import (
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"path"
	"regexp"

	"vita/note"
)

var errorNotNote = errors.New("not a note")
var noteMatcher = regexp.MustCompile("^(\\d+)_\\[([a-zA-Z0-9 \\-]+)\\]_(.+)\\.md$")

func preprocessCategories(categories []note.Category) ([]note.Category, error) {
	categories = note.UniqueCategories(categories)

	if len(categories) == 0 {
		return nil, errorNoCategories
	}

	for _, category := range categories {
		if !category.IsValid() {
			return nil, errors.New("invalid category " + category.String())
		}
	}

	return categories, nil
}

func readNoteInfo(noteType note.Type, fileInfo os.FileInfo) (*note.Info, error) {
	values := noteMatcher.FindStringSubmatch(fileInfo.Name())
	if values == nil {
		return nil, errorNotNote
	}

	key, err := note.ParseKeyID(noteType, values[1])
	if err != nil {
		return nil, err
	}

	categories, err := note.ParseCategories(values[2])
	if err != nil {
		return nil, err
	}

	name := values[3]

	return &note.Info{
		Key:        key,
		Name:       name,
		Timestamp:  note.ParseTime(fileInfo.ModTime()),
		Categories: categories,
	}, nil
}

func getNoteFile(info *note.Info) string {
	return fmt.Sprintf("%d_[%s]_%s.md", info.Key.ID, note.StringifyCategories(info.Categories), info.Name)
}

func (s *fsStorage) getNoteFilePath(info *note.Info) string {
	return path.Join(s.base, info.Key.Type.String(), getNoteFile(info))
}

func (s *fsStorage) readNote(info *note.Info) (*note.Note, error) {
	path := s.getNoteFilePath(info)

	data, err := ioutil.ReadFile(path)
	if err != nil {
		return nil, err
	}

	n := info.ToNote()
	n.Data = string(data)

	return n, nil
}

func (s *fsStorage) writeNote(n *note.Note) (os.FileInfo, error) {
	path := s.getNoteFilePath(n.ToInfo())

	return writeFile(path, []byte(n.Data))
}

func (s *fsStorage) removeNote(info *note.Info) error {
	path := s.getNoteFilePath(info)

	return os.Remove(path)
}

func (s *fsStorage) nextKey(noteType note.Type) note.Key {
	var maxID note.ID

	for key := range s.records {
		if key.ID > maxID {
			maxID = key.ID
		}
	}

	return note.NewKey(noteType, maxID+1)
}
