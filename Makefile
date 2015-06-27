GOSRC  := .
GODIRS := $(GOSRC) $(GOSRC)/storage
APP    := ./bin/vita

TEST_BASE := /tmp/vita

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

clear-test-data:
	rm -rf $(TEST_BASE)

init-test-data:
	mkdir -p $(TEST_BASE)

# check code
check:
	go vet $(GOSRC)
	golint $(GOSRC)

run: build
	$(APP) -p 8081 --root /tmp/vita
