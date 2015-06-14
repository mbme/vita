package storage

import (
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"path"
	"regexp"

	"log"
	"vita/note"
)

var errorNotAttachment = errors.New("not attachment")
var attachmentMatcher = regexp.MustCompile("^(\\d+)__(.+)$")

func readAttachmentInfo(fileInfo os.FileInfo) (note.ID, *note.FileInfo, error) {
	log.Println(fileInfo.Name())
	values := attachmentMatcher.FindStringSubmatch(fileInfo.Name())
	if values == nil {
		return 0, nil, errorNotAttachment
	}

	id, err := note.ParseID(values[1])
	if err != nil {
		return 0, nil, err
	}

	name := values[2]
	mime := note.GetMimeType(name)

	return id, &note.FileInfo{
		Name:      name,
		Timestamp: note.ParseTime(fileInfo.ModTime()),
		Size:      fileInfo.Size(),
		MimeType:  mime,
		Type:      note.GetFileType(mime),
	}, nil
}

func getAttachmentFile(id note.ID, fileName string) string {
	return fmt.Sprintf("%d__%s", id, fileName)
}

func (s *fsStorage) getAttachmentFilePath(info *note.Info, fileName string) string {
	return path.Join(s.base, info.Type.String(), getAttachmentFile(info.ID, fileName))
}

func (s *fsStorage) writeAttachment(info *note.Info, fileName string, data []byte) (os.FileInfo, error) {
	path := s.getAttachmentFilePath(info, fileName)

	return writeFile(path, data)
}

func (s *fsStorage) readAttachment(info *note.Info, fileName string) ([]byte, error) {
	path := s.getAttachmentFilePath(info, fileName)

	data, err := ioutil.ReadFile(path)
	if err != nil {
		return nil, err
	}

	return data, nil
}

func (s *fsStorage) removeAttachment(info *note.Info, fileName string) error {
	path := s.getAttachmentFilePath(info, fileName)

	return os.Remove(path)
}
