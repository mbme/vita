ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

GOSRC  := ./src/vita
APP    := ./bin/vita
TARGET := ./target
WEBUI  := ./webui

DEVEL_BASE := /tmp/vita

TEST_DATA := $(ROOT_DIR)/dev_stuff/test_data
DEVEL_CONFIG := $(ROOT_DIR)/dev_stuff/vita.config.json

clean:
	rm -rf $(APP) $(TARGET)

build:
	gb build -ldflags "-X main.gitTag=$(shell git describe --tags --long --always)" all

generate-resources:
	gulp scripts:prod

	cp $(WEBUI)/favicon.ico     $(TARGET)/
	cp $(WEBUI)/prod-index.html $(TARGET)/index.html

bundle-resources:
	go-bindata -nomemcopy -pkg "handlers" -prefix "$(TARGET)" -o $(GOSRC)/handlers/static-data.go $(TARGET)/...

release: clean generate-resources bundle-resources build


# for development

clear-test-data:
	rm -rf $(DEVEL_BASE)

init-test-data: build
	$(APP) --config $(DEVEL_CONFIG) init --parents
	cp -r $(TEST_DATA)/* $(DEVEL_BASE)

run:
	$(APP) --config $(DEVEL_CONFIG) run

# check code
check:
	go vet $(GOSRC)
	golint $(GOSRC)

# install project deps
deps:
	gb vendor update --all

# install dev deps
dev-deps:
	go get -u github.com/constabulary/gb/...
	go get -u github.com/jteeuwen/go-bindata/...

.PHONY: clean build generate-resources bundle-resources release clear-test-data init-test-data run check deps dev-deps
