#!/bin/bash
DIR=${PWD}
FM_DIR=../form-maker
cd $FM_DIR
npm run compile
rm -rf $DIR/node_modules/form-maker
mkdir $DIR/node_modules/form-maker
mv lib $DIR/node_modules/form-maker
cp package.json $DIR/node_modules/form-maker
