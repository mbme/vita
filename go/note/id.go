package note

import "strconv"

// ID is id of note
type ID uint32

// NotID means missing or wrong id
const NotID ID = 0

// ParseID parse id from string
func ParseID(idStr string) (ID, error) {
	res, err := strconv.ParseUint(idStr, 10, 32)
	if err != nil {
		return 0, err
	}

	return ID(res), nil
}
