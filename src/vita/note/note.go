package note

import "fmt"

// Note is note
type Note struct {
	*Info
	Data string `json:"data"`
}

func (n *Note) String() string {
	return fmt.Sprintf("%v%v/%s %v", &n.ID, &n.Type, n.Name, n.Categories)
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
