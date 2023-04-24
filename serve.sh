#!/usr/bin/pwsh

echo $SHELL
tsc --project ./functions
rm -rf ./public/*
concurrently -k "firebase serve" "tsc --project ./functions --watch" "cd frontend && ./node_modules/.bin/vue-cli-service build --no-clean --dest ../public --watch" "cd frontend && ./node_modules/.bin/vue-cli-service serve" "sleep 10 && browser-sync start --proxy 'localhost:5000' --files 'public/*'"