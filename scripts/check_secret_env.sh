if [ -e secret.env ]; then
  echo "\nFound a secret.env.\n"
  echo "Starting in prod will overwrite your current .env. Proceed? (y/n)"
  read  OVERWRITE
  if [ $OVERWRITE = 'y' ]; then
    . ./set_prod_env.sh
  else 
    echo "Start in dev mode? (y/n)"
    read STARTOVER
    if [ $STARTOVER = 'y' ]; then
      . ./check_env.sh
    else 
      echo "Ok. Shutting down."
    fi
  fi
  echo "\n"
else
  echo "You haven't set your production environment variables in a secret.env file.\nWould you like to create one here? (y/n)"
  read CREATE
  if [ "$CREATE" = "n" ]; then 
    echo "Ok. In order to use the API in production, a secret.env file must exist in the root of the repo.\nPlease create one manually."
  else 
    touch secret.env
    echo "\nWhat is your production database hostname?"
    read DB_HOST && echo "DB_HOST=$DB_HOST" >> secret.env
    echo "\nWhat is your production database username?"
    read DB_USER && echo "DB_USER=$DB_USER" >> secret.env
    echo "\nWhat is your production database password?"
    read DB_PASSWORD && echo "DB_PASSWORD=$DB_PASSWORD" >> secret.env
    echo "\nWhat is the name of your production database?"
    read DATABASE && echo "DATABASE=$DATABASE" >> secret.env
    echo "\nCreated secret.env file:"
    cat secret.env
    . ./set_prod_env.sh
  fi
fi