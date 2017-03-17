#!/bin/bash

npm run build
rsync -avz "${TRAVIS_BUILD_DIR:-.}/build/" root@198.199.82.7:/root/Dev/docs/build
