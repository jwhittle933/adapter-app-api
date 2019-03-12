start_server() 
{
  echo "Would you like to start the server in dev or prod"
  read ENV
  if [ -z "$ENV" ]; then
    echo "You must provide a value."
    start_server
  fi
}

create_env() 
{
  touch .env
  echo "What is your database hostname?"
  read DB_HOST && echo "DB_HOST=$DB_HOST" >> .env
  echo "What is your database username?"
  read DB_USER && echo "DB_USER=$DB_USER" >> .env
  echo "What is your database password?"
  read DB_PASSWORD && echo "DB_PASSWORD=$DB_PASSWORD" >> .env
  echo "What is the name of your database?"
  read DATABASE && echo "DATABASE=$DATABASE" >> .env
  echo "\nCreated .env file:"
  cat .env
}
