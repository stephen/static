#!/bin/bash

set -ex

./bigfuncloud/build.sh

flyctl deploy
