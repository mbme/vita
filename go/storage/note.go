package storage

import (
	"fmt"
	"strconv"
	"strings"
	"time"
)

// NoteType is type of note
type NoteType string

// possible note types
const (
	Record NoteType = ":record"
	File            = ":file"
)

func (t *NoteType) isValid() bool {
	return *t == Record || *t == File
}

// Category is note category (context)
type Category string

// valid categories are trimmed lower-case strings
func (c Category) isValid() bool {
	str := string(c)
	trimmed := strings.TrimSpace(str)
	lower := strings.ToLower(str)
	return str == trimmed && str == lower
}

// NoteID is id of note
type NoteID uint32

func (id *NoteID) String() string {
	return fmt.Sprintf("%v", *id)
}

// NoteTime timestamp
type NoteTime time.Time

// MarshalJSON implements json_Marshaller
func (t NoteTime) MarshalJSON() ([]byte, error) {
	return []byte(strconv.FormatInt(time.Time(t).Unix(), 10)), nil
}

// Note is one information piece
type Note struct {
	ID         *NoteID    `json:"id"`
	Type       *NoteType  `json:"type"`
	Name       string     `json:"name"`
	Data       string     `json:"data"`
	Categories []Category `json:"categories"`
	TsCreated  *NoteTime  `json:"ts_created"`
	TsUpdated  *NoteTime  `json:"ts_updated"`
}

func (a *Note) String() string {
	return fmt.Sprintf("%v%v/%s %v", &a.ID, &a.Type, a.Name, a.Categories)
}

func unique(arr []Category) []Category {
	var result []Category
	seen := map[Category]int{}

	for _, category := range arr {
		if _, ok := seen[category]; !ok {
			result = append(result, category)
			seen[category] = 1
		}
	}

	return result
}

// Validate validates note and returns array of errors
func (a *Note) Validate() []string {
	var errors []string

	if a.Type == nil {
		errors = append(errors, "missing type")
	} else if !a.Type.isValid() {
		errors = append(errors, fmt.Sprintf("bad type: %v", *a.Type))
	}

	if strings.TrimSpace(a.Name) == "" {
		errors = append(errors, "empty name")
	}

	if len(a.Categories) == 0 {
		errors = append(errors, "no categories specified")
	}

	hasBadCategory := false
	for _, category := range a.Categories {
		if !category.isValid() {
			hasBadCategory = true
			errors = append(errors, fmt.Sprintf("malformed category %s", category))
		}
	}

	if !hasBadCategory && len(a.Categories) != len(unique(a.Categories)) {
		errors = append(errors, "found duplicate categories")
	}

	return errors
}
