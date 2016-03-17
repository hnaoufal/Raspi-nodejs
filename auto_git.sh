#!/bin/bash
while inotifywait ~/git
do
git pull origin master
done
