GOSRC  := ./src/vita
APP    := ./bin/vita
TARGET := ./target
WEBUI  := ./webui

TEST_BASE := /tmp/vita


.PHONY: clean
clean:
	rm -rf $(APP) $(TARGET)
	gulp clean


.PHONY: build
build:
	gb build -ldflags "-X main.gitTag $(shell git describe --tags --long --always)"


.PHONY: run
run:
	$(APP) --debug run -p 8081 /tmp/vita


.PHONY: generate-resources
generate-resources:
	mkdir -p $(TARGET)/css

	cp $(WEBUI)/vendor/jquery/dist/jquery.min.js           $(TARGET)/
	cp $(WEBUI)/vendor/velocity/velocity.min.js            $(TARGET)/
	cp $(WEBUI)/vendor/velocity/velocity.ui.min.js         $(TARGET)/
	cp $(WEBUI)/vendor/markdown-it/dist/markdown-it.min.js $(TARGET)/

	cp $(WEBUI)/vendor/bootstrap/dist/js/bootstrap.min.js  $(TARGET)/
	cp $(WEBUI)/vendor/bootstrap/dist/css/bootstrap.min.css  $(TARGET)/css/
	cp -r $(WEBUI)/vendor/bootstrap/dist/fonts  $(TARGET)

	gulp styles prodScripts
	cp $(WEBUI)/bundle.css       $(TARGET)/css/

	cp $(WEBUI)/favicon.ico     $(TARGET)/
	cp $(WEBUI)/prod-index.html $(TARGET)/index.html


.PHONY: bundle-resources
bundle-resources:
	go-bindata -nomemcopy -pkg "handlers" -prefix "$(TARGET)" -o $(GOSRC)/handlers/static-data.go $(TARGET)/...


.PHONY: release
release: clean generate-resources bundle-resources build


# for development
.PHONY: clear-test-data
clear-test-data:
	rm -rf $(TEST_BASE)

.PHONY: init-test-data
init-test-data:
	$(APP) init --parents /tmp/vita

# check code
.PHONY: check
check:
	go vet $(GOSRC)
	golint $(GOSRC)

# install project deps
.PHONY: deps
deps:
	go get -u github.com/codegangsta/cli

	go get -u github.com/gorilla/context
	go get -u github.com/gorilla/mux
	go get -u github.com/gorilla/websocket

# install dev deps
.PHONY: dev-deps
dev-deps:
	go get -u github.com/constabulary/gb/...
	go get -u github.com/jteeuwen/go-bindata/...
