#!/bin/bash

set -ex

cp -r ./src/. out/

pushd city-guide
npm install
npm run build
npm run export
popd
cp -r ./city-guide/out/. ./out/city-guide

pushd quiz-proto
npm install
npm run build-production
popd
cp -r ./quiz-proto/out/. ./out/quiz-proto
cp -r ./quiz-proto/src/index.html ./out/quiz-proto
cp -r ./quiz-proto/node_modules/kuromoji/dict/ ./out/quiz-proto/dict/

pushd led
npm install
PUBLIC_URL="/led/" npm run build
popd
cp -r ./led/build/. ./out/led
