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

check_env()
{
  if [ -e .env ]; then
    echo "\nFound an .env.\n"
    cat .env
    echo "\n"
    start_server
  else
    echo "You haven't set your environment variables in a .env file.\nWould you like to create one here? y/n"
    read CREATE
    if [ "$CREATE" = "n" ]; then 
      echo "Ok. In order to use the API, a .env file must exist in the root of the repo.\nPlease create one manually."
  else 
      create_env
      start_server
    fi
  fi
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
        create_secret_env
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
  echo "\nWhat is your database hostname?"
  read DB_HOST && echo "DB_HOST=$DB_HOST" >> .env
  echo "\nWhat is your database username?"
  read DB_USER && echo "DB_USER=$DB_USER" >> .env
  echo "\nWhat is your database password?"
  read DB_PASSWORD && echo "DB_PASSWORD=$DB_PASSWORD" >> .env
  echo "\nWhat is the name of your database?"
  read DATABASE && echo "DATABASE=$DATABASE" >> .env
  echo "\nCreated .env file:"
  cat .env
}

create_secret_env()
{
  touch secret.env
  echo "Created secret.env\n"
  echo "\nWhat is your database hostname?"
  read DB_HOST && echo "DB_HOST=$DB_HOST" >> secret.env
  echo "\nWhat is your database username?"
  read DB_USER && echo "DB_USER=$DB_USER" >> secret.env
  echo "\nWhat is your database password?"
  read DB_PASSWORD && echo "DB_PASSWORD=$DB_PASSWORD" >> secret.env
  echo "\nWhat is the name of your database?"
  read DATABASE && echo "DATABASE=$DATABASE" >> .secret.env
  echo "\nWrote secret.env file:"
  cat secret.env
}
