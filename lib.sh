start_server() 
{
  echo "Would you like to start the server in dev or prod?"
  read ENV
  case $ENV in 
    prod) 
      echo "Starting in ${ENV} mode.\n"
      set_prod_env
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
}
set_prod_env()
{
  if [ -e secret.env ]; then
    echo "Setting environment variables...\n"
    echo `grep "DB_HOST" secret.env` > .env
    echo `grep "DB_USER" secret.env` >> .env
    echo `grep "DB_PASSWORD" secret.env` >> .env
    echo `grep "DB_PORT" secret.env` >> .env
    echo `grep "DATABASE" secret.env` >> .env
  else 
    echo "This repo doesn't have a secret.env.\nThis file holds your secret credientials.\nWould you like to create one now? y/n"
    read CREATE_SECRET
    case $CREATE_SECRET in 
      y) 
        touch secret.env
        set_prod_env
        ;;
      n)
        echo "Ok. In order to run this in production,\nyou'll need to create a secret.env or\nmanually set your .env."
        ;;
      *) 
        echo "Please enter 'y' or 'n'."
        ;;
    esac
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
