package storage

// AttachmentType attachment type
type AttachmentType string

// possible attachment types
const (
	VideoAttachment  AttachmentType = "video"
	AudioAttachment                 = "audio"
	ImageAttachment                 = "image"
	TextAttachment                  = "document"
	BinaryAttachment                = "binary"
)

// AttachmentInfo information about Note attachment
type AttachmentInfo struct {
	Name      string         `json:"name"`
	TsCreated *NoteTime      `json:"tsCreated"`
	MimeType  string         `json:"mime"`
	Size      int            `json:"size"`
	Type      AttachmentType `json:"type"`
}

var typesMapping = map[AttachmentType][]string{
	ImageAttachment: []string{"image/png"},
	AudioAttachment: []string{},
	VideoAttachment: []string{},
	TextAttachment:  []string{"text/plain"},
}

// AttachmentTypeByMimeType get attachment type by mime type
func AttachmentTypeByMimeType(mimeType string) AttachmentType {
	for attachmentType, mimeTypes := range typesMapping {
		for _, val := range mimeTypes {
			if val == mimeType {
				return attachmentType
			}
		}
	}

	return BinaryAttachment
}
