#!/bin/bash

set -ex

cp -r ./src/. out/

pushd city-guide
npm install
npm run build
npm run export
popd
cp -r ./city-guide/out/. ./out/city-guide

export IMAGE=registry.$BFC_DOMAIN/$BFC_USER/$BFC_APP:latest
docker build -t "$IMAGE" .
docker push "$IMAGE"
