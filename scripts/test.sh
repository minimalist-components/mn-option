#!/bin/bash

set -e

./node_modules/.bin/testcafe chrome ./sources/scripts/*.spec.js --app './node_modules/.bin/http-server . -s'
