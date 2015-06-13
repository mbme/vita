package note

import (
	"fmt"
	"strings"
)

// Note is note
type Note struct {
	*Info
	Data string `json:"data"`
}

func (n *Note) String() string {
	return fmt.Sprintf("%v%v/%s %v", &n.ID, &n.Type, n.Name, n.Categories)
}

// Validate validates note and returns array of errors
func (n *Note) Validate() []string {
	var errors []string

	if n.Type == nil {
		errors = append(errors, "missing type")
	} else if !n.Type.isValid() {
		errors = append(errors, fmt.Sprintf("bad type: %v", *n.Type))
	}

	if strings.TrimSpace(n.Name) == "" {
		errors = append(errors, "empty name")
	}

	if len(n.Categories) == 0 {
		errors = append(errors, "no categories specified")
	}

	hasBadCategory := false
	for _, category := range n.Categories {
		if !category.isValid() {
			hasBadCategory = true
			errors = append(errors, fmt.Sprintf("malformed category %s", category))
		}
	}

	if !hasBadCategory && len(n.Categories) != len(unique(n.Categories)) {
		errors = append(errors, "found duplicate categories")
	}

	return errors
}

// ToInfo converts note to info
func (n *Note) ToInfo() *Info {
	return &Info{
		ID:          n.ID,
		Type:        n.Type,
		Name:        n.Name,
		Categories:  n.Categories,
		Attachments: n.Attachments,
		Timestamp:   n.Timestamp,
	}
}
