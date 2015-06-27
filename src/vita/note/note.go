package note

import "fmt"

// Note is note
type Note struct {
	*Info
	Data string `json:"data"`
}

func (n *Note) String() string {
	return fmt.Sprintf("{%v %s %v}", &n.Key, n.Name, n.Categories)
}

// ToInfo converts note to info
func (n *Note) ToInfo() *Info {
	return &Info{
		Key:         n.Key,
		Name:        n.Name,
		Categories:  n.Categories,
		Attachments: n.Attachments,
		Timestamp:   n.Timestamp,
	}
}
