GOSRC  := ./go
GODIRS := $(GOSRC) $(GOSRC)/storage
APP    := ./vita

clean:
	rm -rf $(APP)
	gulp clean

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
