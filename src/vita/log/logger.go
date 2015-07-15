package log

import (
	"fmt"
	"time"
)

func ts() string {
	return time.Now().Format(time.Stamp)
}

func print(msg string) {
	println(msg)
}

// Debugf allows to log debug message
func Debugf(pattern string, args ...interface{}) {
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
	print("ERROR: " + fmt.Sprintf(pattern, args...))
}

// Fatal allows to log fatal message
func Fatal(msg string) {
	print("FATAL: " + msg)
}

// Fatalf allows to log fatal message
func Fatalf(pattern string, args ...interface{}) {
	Fatal(fmt.Sprintf(pattern, args...))
}
