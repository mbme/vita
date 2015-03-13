clean:
	lein clean

serv: clean
	lein with-profile develop figwheel

build: clean
	lein cljsbuild once

.PHONY: clean serv build
