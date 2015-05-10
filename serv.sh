#!/bin/bash

termite -d . -e "make serv" -t "BACKEND" &

mytitle="FRONTEND"
echo -e '\033]2;'$mytitle'\007'
make serv-cljs
