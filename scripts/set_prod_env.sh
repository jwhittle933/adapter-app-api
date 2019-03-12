if [ -e secret.env ]; then
  echo "Setting environment variables...\n"
  echo `grep "DB_HOST" secret.env` > .env
  echo `grep "DB_USER" secret.env` >> .env
  echo `grep "DB_PASS" secret.env` >> .env
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
