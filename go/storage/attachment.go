package storage

// AttachmentInfo information about Note attachment
type AttachmentInfo struct {
	Name      string    `json:"name"`
	TsCreated *NoteTime `json:"tsCreated"`
	MimeType  string    `json:"mime"`
	Size      int       `json:"size"`
}
