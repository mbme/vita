GOSRC  := .
GODIRS := $(GOSRC) $(GOSRC)/storage
APP    := ./bin/vita

clean:
	rm -rf $(APP)
	gulp clean

# install project deps
deps:
	go get -u github.com/codegangsta/cli
	go get -u github.com/gorilla/websocket

build:
	gb build

# run tests
test:
	echo "test"

# check code
check:
	go vet $(GOSRC)
	golint $(GOSRC)

run: build
	$(APP)
