BASE := .

DIST := $(BASE)/dist

GOSRC  := $(BASE)/go
GODIRS := $(GOSRC) $(GOSRC)/storage
TARGET := $(BASE)/target
APP    := $(TARGET)/vita

VENDOR := $(BASE)/vendor

STYLES := $(BASE)/styles

clean:
	rm -f $(BASE)/.lein-figwheel-server.log
	rm -rf $(TARGET) $(DIST)

clean-cljs:
	rm -rf $(DIST)/app*

# install project deps
deps:
	go get -u github.com/codegangsta/cli
	go get -u github.com/gorilla/websocket

build:
	go build -tags='dev' -o $(APP) -v $(GOSRC)

build-cljs: clean-cljs
	lein with-profile develop cljsbuild once

# run tests
test:
	go test -v ${GODIRS}

# check code
check:
	go vet $(GOSRC)
	golint $(GOSRC)

run: build
	$(APP)

serv:
	$(BASE)/dev/watch -d $(GOSRC) -f "\.go$$" -b 'make build' -r $(APP)

serv-cljs: clean-cljs
	rlwrap lein with-profile develop figwheel

prod: clean
	mkdir $(DIST)

	cp -r $(VENDOR)/open-sans-fontface/fonts $(DIST)/open-sans
	cp -r $(VENDOR)/ionicons/fonts $(DIST)/ionicons
	# remove all other ttf/otf/svg fonts
	find $(DIST) -type f ! -name "*.woff" -delete

	lein cljsbuild once
	scss -t compressed --sourcemap=none $(STYLES)/main.scss $(DIST)/main.css

	# generate go source file with all the resources
	go-bindata -o go/resources-prod.go -tags="prod" -nomemcopy -prefix "dist" dist/...
	go build -tags='prod' -o $(APP) -v $(GOSRC)

.PHONY: clean clean-cljs deps build build-cljs test check run serv serv-cljs prod
