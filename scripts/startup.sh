#!/bin/sh
. ./scripts/start_server.sh

if [ -e .env ]; then
  echo "\nFound an .env\n"
  cat .env
  echo "\n"
else
  echo "You haven't set the necessary environment variables in a .env file.\nWould you like to create one here? y/n"
  read CREATE
  if [ "$CREATE" = "n" ]; then 
    echo "\nIn order to run the API, a .env file must exist in the following format at the root of the repo."
    echo "\nDB_HOST=<your host name>"
    echo "DB_USER=<your username>"
    echo "DB_PASS=<your password>"
    echo "DATABASE=<your db name>"
    echo "\nPlease create one manually."
  else 
    create_env
    start_server
  fi
fi
