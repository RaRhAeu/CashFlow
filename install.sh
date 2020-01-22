#!/bin/bash

curl -sL https://deb.nodesource.com/setup_10.15.2 | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install mongodb
sudo apt-get install npm

npm install
npm install --prefix client
npm run build --prefix client
export NODE_ENV=production
