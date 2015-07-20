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

	var files []os.FileInfo
	for _, item := range items {
		if item.IsDir() == dirs {
			files = append(files, item)
		}
	}

	return files, nil
}

func writeFile(path string, data []byte) (os.FileInfo, error) {
	if err := ioutil.WriteFile(path, data, filePerm); err != nil {
		return nil, err
	}

	return os.Stat(path)
}
