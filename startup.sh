#!/bin/sh

if [ -e .env ]; then
  echo "\nFound your .env.\n"
  cat .env
  echo "\n"
    
else
  echo "You haven't set your environment variables in a .env file.\nWould you like to create one here? y/n"
  read CREATE
  if [ "$CREATE" = "n" ]; then 
    echo "Ok. In order to use this API, a .env file must exist in the repo.\n Please create one manually."
  else 
    touch .env
    echo "What is your DB_HOST?"
    read DB_HOST && echo $DB_HOST >> .env
    echo "What is your DB_USER?"
    read DB_USER
    echo $DB_USER >> .env
    echo "What is your DB_PASSWORD?"
    read DB_PASSWORD
    echo $DB_PASSWORD >> .env
fi

echo "Would you like to start the server in dev or prod"
read ENV

if [ -z "$ENV" ]; then
  echo "You must provide a value."
fi

echo "Ok, starting in ${ENV} mode."