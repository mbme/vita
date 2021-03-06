package note

import (
	"fmt"
)

// Info is note description
type Info struct {
	Key         Key         `json:"key"`
	Name        string      `json:"name"`
	Categories  []Category  `json:"categories"`
	Attachments []*FileInfo `json:"attachments"`
	Timestamp   Time        `json:"timestamp"`
}

// ToNote converts note info to note
func (info *Info) ToNote() *Note {
	cloned := *info
	return &Note{
		&cloned, "",
	}
}

func (info *Info) indexOfAttachment(fileName string) int {
	for i, f := range info.Attachments {
		if f.Name == fileName {
			return i
		}
	}

	return -1
}

// HasAttachment checks if note already has attachment with fileName
func (info *Info) HasAttachment(fileName string) bool {
	return info.indexOfAttachment(fileName) > -1
}

// AddAttachment add attachment to note
func (info *Info) AddAttachment(attachment *FileInfo) {
	info.Attachments = append(info.Attachments, attachment)
}

// RemoveAttachment remove attachment from note
func (info *Info) RemoveAttachment(fileName string) {
	i := info.indexOfAttachment(fileName)

	if i == -1 {
		return
	}

	info.Attachments = append(info.Attachments[:i], info.Attachments[i+1:]...)
}

func (info *Info) String() string {
	return fmt.Sprintf("{%v %v %v}", info.Key, info.Categories, info.Name)
}
