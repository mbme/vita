package log

import (
	"errors"
	"fmt"
	"os"
	"strings"
	"time"
)

// Verbose should be true to show debug logs
var Verbose bool

func ts() string {
	return time.Now().Format(time.Stamp)
}

func print(msg string) {
	if !strings.HasSuffix(msg, "\n") {
		msg += "\n"
	}
	os.Stdout.WriteString(msg)
}

func printErr(msg string) {
	if !strings.HasSuffix(msg, "\n") {
		msg += "\n"
	}
	os.Stderr.WriteString(msg)
}

// Debugf allows to log debug message
func Debugf(pattern string, args ...interface{}) {
	if !Verbose {
		return
	}
	print(ts() + " " + fmt.Sprintf(pattern, args...))
}

// Info allows to log general message
func Info(msg string) {
	print(msg)
}

// Infof allows to log general message
func Infof(pattern string, args ...interface{}) {
	Info(fmt.Sprintf(pattern, args...))
}

// Warnf allows to log warn message
func Warnf(pattern string, args ...interface{}) {
	print("WARN : " + fmt.Sprintf(pattern, args...))
}

// Error allows to log error
func Error(err interface{}) {
	Errorf("%v", err)
}

// Errorf allows to log error message
func Errorf(pattern string, args ...interface{}) {
	printErr("ERROR: " + fmt.Sprintf(pattern, args...))
}

// Fatal allows to log fatal message
func Fatal(msg string) error {
	printErr("FATAL: " + msg)

	return errors.New(msg)
}

// Fatalf allows to log fatal message
func Fatalf(pattern string, args ...interface{}) error {
	return Fatal(fmt.Sprintf(pattern, args...))
}
