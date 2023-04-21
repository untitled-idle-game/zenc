tsc --project ./functions
rm -rf ./public/*
concurrently --kill-others "firebase serve" \
                           "tsc --project ./functions --watch" 
                           "cd frontend; ./node_modules/.bin/vue-cli-service build --no-clean --dest ./public --watch"