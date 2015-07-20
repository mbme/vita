package note

import (
	"strconv"
)

// ID is id of the note
type ID uint32

// NotID symbols wrong or missing id
const NoID ID = 0

func (id ID) String() string {
	return string(id)
}

// ParseID parses note id string
func ParseID(idStr string) (ID, error) {
	id, err := strconv.ParseUint(idStr, 10, 32)
	if err != nil {
		return NoID, err
	}

	return ID(id), nil
}
