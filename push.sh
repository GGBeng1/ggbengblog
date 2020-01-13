#!/bin/bash

rm -rf .git
cd `dirname $0`/public
git init
git add .
git commit -m "提交"
git remote add origin ssh://ggbeng@119.3.251.24:29418/public.git
git push origin master --force
rm -rf .git
cd ../
git init

