package note

import (
	"errors"
	"regexp"
	"strings"
)

var errorNoCategories = errors.New("no categories")

var delim = regexp.MustCompile("[ ,]+")
var categoryMatcher = regexp.MustCompile("^[a-zA-Z0-9]+$")

// Category is note category (context)
type Category string

func (c Category) String() string {
	return string(c)
}

// IsValid checks if category is valid
func (c Category) IsValid() bool {
	return categoryMatcher.MatchString(string(c))
}

// UniqueCategories drops duplicate categories
func UniqueCategories(arr []Category) []Category {
	var result []Category
	seen := map[string]int{}

	for _, category := range arr {
		// categories are case insensitive
		categoryStr := strings.ToLower(string(category))
		if _, ok := seen[categoryStr]; !ok {
			result = append(result, category)
			seen[categoryStr] = 1
		}
	}

	return result
}

// ParseCategories parses categories string
func ParseCategories(raw string) ([]Category, error) {
	rawCategories := delim.Split(raw, -1)

	var categories []Category

	for _, x := range rawCategories {
		category := strings.TrimSpace(x)

		if len(category) > 0 {
			categories = append(categories, Category(category))
		}
	}

	if len(categories) == 0 {
		return nil, errorNoCategories
	}

	return categories, nil
}

// StringifyCategories converts categories array into string
func StringifyCategories(categories []Category) string {
	categoriesStr := make([]string, len(categories))
	for i, category := range categories {
		categoriesStr[i] = category.String()
	}

	return strings.Join(categoriesStr, " ")
}
