package note

import (
	"fmt"
	"strconv"
)

// ID is id of note
type ID uint32

func (id *ID) String() string {
	return fmt.Sprintf("%v", *id)
}

// ParseID parse id from string
func ParseID(idStr string) (*ID, error) {
	res, err := strconv.ParseUint(idStr, 10, 32)
	if err != nil {
		return nil, err
	}

	id := ID(res)

	return &id, nil
}
