#!/bin/bash

set -ex

cp -r ./src/. out/

pushd city-guide
npm install
npm run build
npm run export
popd
cp -r ./city-guide/out/. ./out/city-guide

flyctl deploy
