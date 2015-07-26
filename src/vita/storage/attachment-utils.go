package storage

import (
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"path"
	"regexp"

	"vita/note"
	"vita/utils"
)

var errorNotAttachment = errors.New("not attachment")
var attachmentMatcher = regexp.MustCompile("^(\\d+)__(.+)$")

func readAttachmentInfo(noteType note.Type, fileInfo os.FileInfo) (note.Key, *note.FileInfo, error) {
	values := attachmentMatcher.FindStringSubmatch(fileInfo.Name())
	if values == nil {
		return note.NoKey, nil, errorNotAttachment
	}

	key, err := note.ParseKeyID(noteType, values[1])
	if err != nil {
		return note.NoKey, nil, err
	}

	name := values[2]
	mime := note.GetMimeType(name)

	return key, &note.FileInfo{
		Name:      name,
		Timestamp: note.ParseTime(fileInfo.ModTime()),
		Size:      fileInfo.Size(),
		MimeType:  mime,
		Type:      note.GetFileType(mime),
	}, nil
}

func getAttachmentFile(key note.Key, fileName string) string {
	return fmt.Sprintf("%d__%s", key.ID, fileName)
}

func (s *fsStorage) getAttachmentFilePath(info *note.Info, fileName string) string {
	return path.Join(s.base, info.Key.Type.String(), getAttachmentFile(info.Key, fileName))
}

func (s *fsStorage) writeAttachment(info *note.Info, fileName string, data []byte) (os.FileInfo, error) {
	path := s.getAttachmentFilePath(info, fileName)

	return utils.WriteFile(path, data, filePerm)
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
