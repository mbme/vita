GOSRC  := ./src/vita
APP    := ./bin/vita
TARGET := ./target
WEBUI  := ./webui

TEST_BASE := /tmp/vita

# install project deps
deps:
	go get -u github.com/codegangsta/cli
	go get -u github.com/gorilla/context
	go get -u github.com/gorilla/mux
	go get -u github.com/gorilla/websocket

# install dev deps
dev-deps:
	go get -u github.com/constabulary/gb/...
	go get -u github.com/jteeuwen/go-bindata/...

clean:
	rm -rf $(APP) $(TARGET)
	gulp clean

build:
	gb build

run:
	$(APP) --root /tmp/vita run -p 8081

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

bundle-resources:
	go-bindata -nomemcopy -pkg "handlers" -prefix "$(TARGET)" -o $(GOSRC)/handlers/static-data.go $(TARGET)/...

release: clean generate-resources bundle-resources build


# for development

clear-test-data:
	rm -rf $(TEST_BASE)

init-test-data:
	$(APP) --root /tmp/vita init --parents

# check code
check:
	go vet $(GOSRC)
	golint $(GOSRC)
