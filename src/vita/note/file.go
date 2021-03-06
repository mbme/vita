package note

import (
	"mime"
	"path/filepath"
)

// FileType is attachment type
type FileType string

// possible attachment types
const (
	VideoFile  FileType = "video"
	AudioFile           = "audio"
	ImageFile           = "image"
	TextFile            = "document"
	BinaryFile          = "binary"
)

// FileInfo contains information about Note attachment
type FileInfo struct {
	Name      string   `json:"name"`
	Timestamp Time     `json:"timestamp"`
	MimeType  string   `json:"mime"`
	Size      int64    `json:"size"`
	Type      FileType `json:"type"`
}

var typesMapping = map[FileType][]string{
	ImageFile: []string{"image/png", "image/jpeg"},
	AudioFile: []string{},
	VideoFile: []string{},
	TextFile:  []string{"text/plain"},
}

// GetMimeType returns file mime type by file name
func GetMimeType(fileName string) string {
	return mime.TypeByExtension(filepath.Ext(fileName))
}

// GetFileType get file type by mime type
func GetFileType(mimeType string) FileType {
	for attachmentType, mimeTypes := range typesMapping {
		for _, val := range mimeTypes {
			if val == mimeType {
				return attachmentType
			}
		}
	}

	return BinaryFile
}
