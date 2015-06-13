package note

import (
	"errors"
)

// Type is type of note
type Type string

// possible note types
const (
	Record  Type = ":record"
	Contact Type = ":contact"
)

// Types are possible note types
var Types = []Type{Record, Contact}

var errorBadType = errors.New("bad type")

func (t *Type) isValid() bool {
	for _, x := range Types {
		if x == *t {
			return true
		}
	}

	return false
}

// ParseType parse type string
func ParseType(typeStr string) (*Type, error) {
	for _, x := range Types {
		if string(x) == typeStr {
			return &x, nil
		}
	}

	return nil, errorBadType
}
