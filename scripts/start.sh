#!/bin/bash

set -e

# Set debug run options
OPT=("--max_old_space_size=${MAX_OLD_SPACE_SIZE:-3072}")

if [ "${NODE_ENV}" != "production" ]; then
  if [ ! -f "./.env" ]; then
    echo -e "\033[1;31m WARNING: Missing .env file, see CONTRIBUTING.md. \033[0m"
  fi
  OPT+=(--preserve-symlinks)

  if [ "${DEBUG}" != "true" ]; then
    yarn concurrently --kill-others 'yarn relay --watch' 'node --max_old_space_size=3072 ./src/dev.js'
  else
    yarn concurrently --kill-others 'yarn relay --watch' 'node --inspect --max_old_space_size=3072 ./src/dev.js'
  fi
else
  exec node "${OPT[@]}" --no-experimental-fetch ./server.dist.js
fi
