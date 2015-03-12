clean:
	lein clean

serv:
	lein with-profile develop figwheel

build: clean
	lein cljsbuild once

.PHONY: clean serv build
