BASE := .

GOSRC  := $(BASE)/go
GODIRS := $(GOSRC) $(GOSRC)/storage
TARGET := $(BASE)/target
APP    := $(TARGET)/vita

clean:
	rm -f $(BASE)/.lein-figwheel-server.log
	rm -f $(APP)
	lein clean

build:
	go build -o $(APP) -v $(GOSRC)

test:
	go test -v ${GODIRS}

install:
	go install $(GOSRC)

check:
	go vet $(GOSRC)
	golint $(GOSRC)

run: build
	$(APP)

serv:
	node $(BASE)/dev/watch.js $(GOSRC) $(APP)

# serv: clean
# 	rlwrap lein with-profile develop figwheel

# build:
# 	rm -rf $(DIST)
# 	lein cljsbuild once
# 	cp resources/index.html        $(DIST)
# 	cp -r resources/open-sans      $(DIST)/open-sans/
# 	mkdir $(DIST)/ionicons
# 	cp -r resources/ionicons/fonts $(DIST)/ionicons/fonts
# 	mkdir $(DIST)/styles
# 	scss -t compressed -I resources/styles resources/styles/main.scss $(DIST)/styles/main.css

.PHONY: clean build test install check run serv
