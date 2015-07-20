package note

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
