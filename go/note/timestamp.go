package note

import (
	"strconv"
	"time"
)

// Time timestamp
type Time time.Time

// ParseTime timestamp to note time
func ParseTime(ts time.Time) *Time {
	res := Time(ts)
	return &res
}

// MarshalJSON implements json_Marshaller
func (t Time) MarshalJSON() ([]byte, error) {
	return []byte(strconv.FormatInt(time.Time(t).Unix(), 10)), nil
}
