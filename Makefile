ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

GOSRC  := ./src/vita
APP    := ./bin/vita
TARGET := ./target
WEBUI  := ./web
NODE_BIN := ./node_modules/.bin

DEVEL_BASE := /tmp/vita

TEST_DATA := $(ROOT_DIR)/dev_stuff/test_data
DEVEL_CONFIG := $(ROOT_DIR)/dev_stuff/vita.config.json

clean:
	rm -rf $(APP) $(TARGET)

build: check
	gb build -ldflags "-X main.gitTag=$(shell git describe --tags --long --always)" all

generate-resources:
	NODE_ENV="production" $(NODE_BIN)/webpack
	cp $(WEBUI)/favicon.ico     $(TARGET)/
	cp $(WEBUI)/index.html      $(TARGET)/

bundle-resources:
	go-bindata -nomemcopy -pkg "handlers" -prefix "$(TARGET)" -o $(GOSRC)/handlers/static-data.go $(TARGET)/...

build-web: check-web clean generate-resources bundle-resources


# for development

clear-test-data:
	rm -rf $(DEVEL_BASE)

init-test-data: build
	$(APP) --config $(DEVEL_CONFIG) init --parents
	cp -r $(TEST_DATA)/* $(DEVEL_BASE)

run:
	$(APP) --config $(DEVEL_CONFIG) run

run-web:
	$(NODE_BIN)/webpack-dev-server --content-base $(WEBUI) --hot --inline

test-web:
	NODE_ENV="test" $(NODE_BIN)/webpack
	NODE_ENV="test" $(NODE_BIN)/mocha --require mocha-setup.js --reporter nyan $(TARGET)/test.bundle.js


# check code
check:
	go vet $(GOSRC)
	golint $(GOSRC)

check-web:
	$(NODE_BIN)/eslint --ext .js --ext .jsx $(WEBUI)

# install project deps
deps:
	gb vendor update --all

# install dev deps
dev-deps:
	go get -u github.com/constabulary/gb/...
	go get -u github.com/jteeuwen/go-bindata/...
	go get -u github.com/golang/lint/golint

.PHONY: clean build generate-resources bundle-resources release clear-test-data init-test-data run check check-web deps dev-deps
