#!/bin/bash

npm run build
rsync -ravz --delete-after "${TRAVIS_BUILD_DIR:-.}/build/" root@198.199.82.7:/var/www/html
