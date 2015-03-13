DIST := ./dist

clean:
	lein clean
	rm -rf $(DIST)

serv: clean
	lein with-profile develop figwheel

build: clean
	lein cljsbuild once
	cp resources/index.html        $(DIST)
	cp -r resources/open-sans      $(DIST)/open-sans/
	mkdir $(DIST)/ionicons
	cp -r resources/ionicons/fonts $(DIST)/ionicons/fonts
	mkdir $(DIST)/styles
	scss -t compressed -I resources/styles resources/styles/main.scss $(DIST)/styles/main.css

.PHONY: clean serv build
