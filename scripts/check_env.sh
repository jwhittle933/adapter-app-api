if [ -e .env ]; then
  echo "\nFound an .env.\n"
  cat .env
  . ./execute.sh
else
  echo "You haven't set your development environment variables in a .env file.\nWould you like to create one here? (y/n)"
  read CREATE
  if [ "$CREATE" = "n" ]; then 
    echo "Ok. In order to use the API, a .env file must exist in the root of the repo.\nPlease create one manually."
  else 
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
    . ./execute.sh
  fi
fi
