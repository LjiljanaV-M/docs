#!/bin/bash

node ~/Dev/docs/scripts/build.js
rsync -avz ~/Dev/docs/build/ /var/www/html
