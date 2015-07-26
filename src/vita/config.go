package main

import (
	"encoding/json"
	"io/ioutil"
	"vita/utils"
)

// Config is app config file
type Config struct {
	RootDir string `json:"root_dir"`
	Debug   bool   `json:"debug"`
	Port    uint16 `json:"port"`
}

func readConfigFile(configFile string) (Config, error) {
	var conf Config

	configFile, err := utils.AbsPath(configFile)
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
