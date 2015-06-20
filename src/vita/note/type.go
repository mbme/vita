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
	NoType  Type = ""
)

// Types are possible note types
var Types = []Type{Record, Contact}

var errorBadType = errors.New("bad type")

// IsValid checks if type is one of valid note types
func (t Type) IsValid() bool {
	for _, x := range Types {
		if x == t {
			return true
		}
	}

	return false
}

func (t Type) String() string {
	return string(t)
}

// ParseType parse type string
func ParseType(typeStr string) (Type, error) {
	for _, x := range Types {
		if string(x) == typeStr {
			return x, nil
		}
	}

	return NoType, errorBadType
}
