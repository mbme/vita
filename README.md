# vita

note taking app


## BUILD

### TOOLS

* GNU make to build app
* go 1.5+ to compile app
* [go-bindata](https://github.com/jteeuwen/go-bindata) to embed UI resources into executable file
* leiningen (& java) to compile ClojureScript
* sass to compile styles
* (DEV) node.js for bower(updating UI dependencies) and watch.js (auto-rebuilding go app on change)

### DEPENDENCIES

* github.com/codegangsta/cli
* github.com/gorilla/websocket

## License

Copyright © 2015 mbme
