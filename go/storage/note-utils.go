package storage

import (
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"path"
	"regexp"

	"github.com/mbme/vita/go/note"
)

var errorNotNote = errors.New("not a note")
var noteMatcher = regexp.MustCompile("^(\\d+)_(\\[[a-zA-Z0-9 \\-]+\\])_([\\p{Cyrillic}\\w]+)\\.md$")

func readNoteInfo(fileInfo os.FileInfo) (*note.Info, error) {
	values := noteMatcher.FindStringSubmatch(fileInfo.Name())
	if values == nil {
		return nil, errorNotNote
	}

	id, err := note.ParseID(values[1])
	if err != nil {
		return nil, err
	}

	categories := note.ParseCategories(values[2])

	return &note.Info{
		ID:         id,
		Name:       values[3],
		Timestamp:  note.ParseTime(fileInfo.ModTime()),
		Categories: categories,
	}, nil
}

func getNoteFile(info *note.Info) string {
	return fmt.Sprintf("%d_[%s]_%s.md", *info.ID, note.StringifyCategories(info.Categories), info.Name)
}

func (s *fsStorage) getNoteFilePath(info *note.Info) string {
	return path.Join(s.base, string(*info.Type), getNoteFile(info))
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

func (s *fsStorage) nextID() *note.ID {
	maxID := note.ID(0)

	for id := range s.records {
		if id > maxID {
			maxID = id
		}
	}

	newID := maxID + 1

	return &newID
}
