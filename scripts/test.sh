#!/bin/bash

set -e

: ${browser:=nightmare}

./node_modules/.bin/testcafe "$browser" \
./sources/scripts/*.spec.js \
--app './node_modules/.bin/http-server . -s'

