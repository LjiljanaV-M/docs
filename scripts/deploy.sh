#!/bin/bash

npm run build

rsync -avz ~/Dev/docs/build/ /var/www/html
