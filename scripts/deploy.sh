#!/bin/bash

npm run build
rsync -ravz --delete-after "${TRAVIS_BUILD_DIR:-.}/build/" "${DEPLOY_HOST:-deploy@x.x.x.x}:/var/www/html"
