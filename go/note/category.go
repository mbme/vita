package note

import "strings"
import "regexp"

var delim = regexp.MustCompile("[ ]+")

// Category is note category (context)
type Category string

func (c Category) String() string {
	return string(c)
}

// IsValid checks if category is valid: trimmed lower-case strings
func (c Category) IsValid() bool {
	str := string(c)
	trimmed := strings.TrimSpace(str)
	lower := strings.ToLower(str)
	return str == trimmed && str == lower
}

// UniqueCategories drops duplicate categories
func UniqueCategories(arr []Category) []Category {
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

	var categories []Category

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
		categoriesStr[i] = category.String()
	}

	return strings.Join(categoriesStr, " ")
}
