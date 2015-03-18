// +build !dev,!prod

package main

// we need this stub just to build without
// errors when no tags specified (i.e. for emacs flycheck)
func main() {
	panic("NYI")
}
