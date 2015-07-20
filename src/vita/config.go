package main

import (
	"encoding/json"
	"io/ioutil"
	"os/user"
	"strings"
)

// Config is app config file
type Config struct {
	RootDir string `json:"root_dir"`
	Debug   bool   `json:"debug"`
	Port    uint16 `json:"port"`
}

func absPath(path string) (string, error) {
	user, err := user.Current()
	if err != nil {
		return path, err
	}

	if path[:2] == "~/" {
		path = strings.Replace(path, "~", user.HomeDir, 1)
	}

	return path, nil
}

func readConfigFile(configFile string) (Config, error) {
	var conf Config

	configFile, err := absPath(configFile)
	if err != nil {
		return conf, err
	}

	data, err := ioutil.ReadFile(configFile)
	if err != nil {
		return conf, err
	}

	err = json.Unmarshal(data, &conf)

	return conf, err
}
