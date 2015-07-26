package utils

import (
	"io/ioutil"
	"os"
	"os/user"
	"strings"
)

// ListFiles creates list of files (or directories) in directory
func ListFiles(path string, dirs bool) ([]os.FileInfo, error) {
	items, err := ioutil.ReadDir(path)
	if err != nil {
		return nil, err
	}

	var files []os.FileInfo
	for _, item := range items {
		if item.IsDir() == dirs {
			files = append(files, item)
		}
	}

	return files, nil
}

// WriteFile writes file with data
func WriteFile(path string, data []byte, filePerm os.FileMode) (os.FileInfo, error) {
	if err := ioutil.WriteFile(path, data, filePerm); err != nil {
		return nil, err
	}

	return os.Stat(path)
}

// AbsPath converts path with tilda (~) to absolute path
func AbsPath(path string) (string, error) {
	user, err := user.Current()
	if err != nil {
		return path, err
	}

	if path[:2] == "~/" {
		path = strings.Replace(path, "~", user.HomeDir, 1)
	}

	return path, nil
}
