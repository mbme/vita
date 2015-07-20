ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

GOSRC  := ./src/vita
APP    := ./bin/vita
TARGET := ./target
WEBUI  := ./webui

DEVEL_BASE := /tmp/vita
TEST_DATA := ./test_data
DEVEL_CONFIG := $(ROOT_DIR)/develConfig.json


.PHONY: clean
clean:
	rm -rf $(APP) $(TARGET)
	gulp clean


.PHONY: build
build:
	gb build -ldflags "-X main.gitTag $(shell git describe --tags --long --always)"


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
	rm -rf $(DEVEL_BASE)

.PHONY: init-test-data
init-test-data:
	$(APP) --config $(DEVEL_CONFIG) init --parents
	cp -r $(TEST_DATA)/* $(DEVEL_BASE)


.PHONY: run
run:
	$(APP) --config $(DEVEL_CONFIG) run

# check code
.PHONY: check
check:
	go vet $(GOSRC)
	golint $(GOSRC)

# install project deps
.PHONY: deps
deps:
	gb vendor update --all

# install dev deps
.PHONY: dev-deps
dev-deps:
	go get -u github.com/constabulary/gb/...
	go get -u github.com/jteeuwen/go-bindata/...
