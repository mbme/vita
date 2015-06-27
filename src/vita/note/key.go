package note

import (
	"errors"
	"fmt"
)

var (
	errorKeyBadID   = errors.New("bad key: bad id")
	errorKeyBadType = errors.New("bad key: bad type")
)

// Key allows to identify note
type Key struct {
	Type Type `json:"type"`
	ID   ID   `json:"id"`
}

// NoKey symbols missing or wrong note key
var NoKey = Key{NoType, NoID}

// NewKey creates new key
func NewKey(noteType Type, id ID) Key {
	return Key{ID: id, Type: noteType}
}

func (key Key) String() string {
	return fmt.Sprintf("%s/%d", key.Type, key.ID)
}

// ParseKeyID creates key from Type and id string
func ParseKeyID(noteType Type, idStr string) (Key, error) {
	if !noteType.IsValid() {
		return NoKey, errorKeyBadType
	}

	id, err := ParseID(idStr)
	if err != nil {
		return NoKey, err
	}

	return Key{ID: id, Type: noteType}, nil
}

// ParseKey parses note key from id string and type string
func ParseKey(typeStr string, idStr string) (Key, error) {
	return ParseKeyID(Type(typeStr), idStr)
}

// Validate allows to check if note id is acceptable
func (key Key) Validate() error {
	if key.ID == NoID {
		return errorKeyBadID
	}

	if !key.Type.IsValid() {
		return errorKeyBadType
	}

	return nil
}
