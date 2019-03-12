start_server() 
{
  echo "Would you like to start the server in dev or prod?"
  read ENV
  case $ENV in 
    prod) 
      echo "Starting in ${ENV} mode.\n"
      ;;
    dev) 
      echo "Starting in ${ENV} mode.\n"
      set_dev_env
      ;;
    *)
      echo "Sorry, that's not a valid value.\n"
      start_server
      ;;
  esac
}

set_dev_env()
{
  echo "Ok. Setting development variables...\n"
  echo "DB_HOST=localhost" > .env
  echo "DB_USER=root" >> .env
  echo "DB_PASSWORD=[password]" >> .env
  echo "DATABASE=adapterapi" >> .env
  echo "SECRET=FancyBear" >> .env
}
set_prod_env()
{

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
