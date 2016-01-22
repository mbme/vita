# vita

note taking app

### TOOLS

* `GNU Make`
* `go 1.4+`
* [gb](https://github.com/constabulary/gb/) as go build tool
* [go-bindata](https://github.com/jteeuwen/go-bindata) to embed UI resources into executable file
* `Node.js`

* Optional `bower` if you want to update fonts or icons

### BUILD

App consists of 2 parts: frontend Single Page App and backend written in Go.

`make build-web` concatenates js files, minifies result and generates Go src file with static resources.

`make build` compiles app into executable file.

### Release process

* `make build-web` update Go src file with static resources
* commit changes
* tag new release
* `make build`

## License

Copyright © 2015-2016 mbme
