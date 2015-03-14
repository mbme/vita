DIRS := . ./storage
BASE := .
GO_FILES = $(wildcard *.go)
APP := vita

clean:
	rm -f $(BASE)/$(APP)

build:
	go build -v $(BASE)

test:
	go test -v ${DIRS}

install:
	go install $(BASE)

check:
	go vet $(BASE)
	golint $(BASE)

run: build
	$(BASE)/$(APP)

serv:
	node $(BASE)/watch.js $(BASE)

.PHONY: clean build test install check run serv
