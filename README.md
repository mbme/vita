# vita

note taking app

## CSS
* classes with prefix "js-" for querying DOM elements: .js-editor, .js-data etc.
* classes with prefix "u-" for utils, like .u-hide

* component classes should start with component name: .WorkspaceItem-data
* classes with prefix "is-" should modify component state and should never appear alone: .WorkspaceItem-data.is-hidden


## BUILD

webpack +
gulp +
handlebars +
es6-babel +
sass +
eslint -

materialize.scss

### TOOLS

* GNU make to build app
* go 1.5+ to compile app
* [go-bindata](https://github.com/jteeuwen/go-bindata) to embed UI resources into executable file
* (DEV) node.js

### DEPENDENCIES

* https://github.com/codegangsta/cli
* https://github.com/gorilla/websocket

## License

Copyright © 2015 mbme
