package note

import "strings"
import "regexp"

var delim = regexp.MustCompile("[ ]+")

// Category is note category (context)
type Category string

// valid categories are trimmed lower-case strings
func (c Category) isValid() bool {
	str := string(c)
	trimmed := strings.TrimSpace(str)
	lower := strings.ToLower(str)
	return str == trimmed && str == lower
}

func unique(arr []Category) []Category {
	var result []Category
	seen := map[Category]int{}

	for _, category := range arr {
		if _, ok := seen[category]; !ok {
			result = append(result, category)
			seen[category] = 1
		}
	}

	return result
}

// ParseCategories parses categories string
func ParseCategories(raw string) []Category {
	rawCategories := delim.Split(raw, -1)

	categories := make([]Category, len(rawCategories))

	for _, x := range rawCategories {
		category := strings.TrimSpace(x)

		if len(category) > 0 {
			categories = append(categories, Category(category))
		}
	}

	return categories
}

// StringifyCategories converts categories array into string
func StringifyCategories(categories []Category) string {
	categoriesStr := make([]string, len(categories))
	for i, category := range categories {
		categoriesStr[i] = string(category)
	}

	return strings.Join(categoriesStr, " ")
}
