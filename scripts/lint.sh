#!/bin/bash

set -e

./node_modules/eslint/bin/eslint.js *.js sources/*.js sources/**/*.js tasks/*.js --quiet
