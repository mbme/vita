BASE := .

GOSRC  := $(BASE)/go
GODIRS := $(GOSRC) $(GOSRC)/storage
TARGET := $(BASE)/target
APP    := $(TARGET)/vita

VENDOR := $(BASE)/vendor

STYLES := $(BASE)/styles

DIST := $(BASE)/dist
DIST_DEV := $(TARGET)

clean:
	rm -rf $(TARGET)

clean-cljs:
	rm -rf $(DIST_DEV)/app*

# install project deps
deps:
	go get -u github.com/codegangsta/cli
	go get -u github.com/gorilla/websocket

build:
	go build -tags='dev' -o $(APP) -v $(GOSRC)

build-cljs:
	lein cljsbuild once dev

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

serv-cljs:
	lein cljsbuild auto dev

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
