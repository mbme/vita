package storage

import (
	"io/ioutil"
	"os"
)

func listFiles(path string, dirs bool) ([]os.FileInfo, error) {
	items, err := ioutil.ReadDir(path)
	if err != nil {
		return nil, err
	}

	files := make([]os.FileInfo, len(items))
	for _, item := range items {
		if item.IsDir() == dirs {
			files = append(files, item)
		}
	}

	return files, nil
}

func writeFile(path string, data []byte) (os.FileInfo, error) {
	if err := ioutil.WriteFile(path, data, 0644); err != nil {
		return nil, err
	}

	return os.Stat(path)
}
