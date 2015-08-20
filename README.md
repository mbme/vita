# vita

note taking app

## CSS

* classes with prefix "js-" for querying DOM elements: .js-editor, .js-data etc.
* classes with prefix "u-" for utils, like .u-hide

* component classes should start with component name: .WorkspaceItem-data
* classes with prefix "is-" should modify component state and should never appear alone: .WorkspaceItem-data.is-hidden


### TOOLS

* `go 1.4+` to compile app
* [gb](https://github.com/constabulary/gb/) as go build tool
* [go-bindata](https://github.com/jteeuwen/go-bindata) to embed UI resources into executable file
* `GNU make` to automate tasks
* `Node.js` for dev tools
* `bower` for frontend package management
* `gulp` to automate tasks
* `webpack` to package UI app

## License

Copyright © 2015 mbme
