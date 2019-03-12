#!/bin/sh
. ./lib.sh


if [ -e .env ]; then
  echo "\nFound an .env.\n"
  cat .env
  echo "\n"
  start_server
else
  echo "You haven't set the environment variables in a .env file.\nWould you like to create one here? y/n"
  read CREATE
  if [ "$CREATE" = "n" ]; then 
    echo "Ok. In order to use the API, a .env file must exist in the root of the repo.\nPlease create one manually."
  else 
    create_env
    start_server
  fi
fi
