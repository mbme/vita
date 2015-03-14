DIST := ./dist

clean:
	rm .lein-figwheel-server.log
	lein clean

serv: clean
	rlwrap lein with-profile develop figwheel

build:
	rm -rf $(DIST)
	lein cljsbuild once
	cp resources/index.html        $(DIST)
	cp -r resources/open-sans      $(DIST)/open-sans/
	mkdir $(DIST)/ionicons
	cp -r resources/ionicons/fonts $(DIST)/ionicons/fonts
	mkdir $(DIST)/styles
	scss -t compressed -I resources/styles resources/styles/main.scss $(DIST)/styles/main.css

.PHONY: clean serv build
