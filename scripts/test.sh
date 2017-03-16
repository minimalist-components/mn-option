#!/bin/bash

set -e

./node_modules/.bin/testcafe nightmare ./sources/scripts/*.spec.js --app './node_modules/.bin/http-server . -s'
