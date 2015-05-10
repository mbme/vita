BASE := .

GOSRC  := $(BASE)/go
GODIRS := $(GOSRC) $(GOSRC)/storage
APP    := $(TARGET)/vita

clean:
	rm -rf $(TARGET)

# install project deps
deps:
	go get -u github.com/codegangsta/cli
	go get -u github.com/gorilla/websocket

build:
	go build -tags='dev' -o $(APP) -v $(GOSRC)

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
