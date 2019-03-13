echo "\nWould you like to start the server in dev or prod?"
read ENV
case $ENV in 
  prod) 
    echo "This mode will overwrite local environment files. Proceed? (y/n)"
    read PROCEED
    if [ $PROCEED = 'y' ]; then
      . ./check_secret_env.sh
    else 
      echo "Start in dev mode? (y/n)"
      read STARTOVER
      if [ $STARTOVER = 'y' ]; then
        ENV='dev'
        . ./check_env.sh
      else 
        echo "Ok. Shutting down."
      fi
    fi
    ;;
  dev) 
    . ./check_env.sh
    ;;
  *)
    echo "\nSorry, that's not a valid value.\n"
    . ./startup.sh
    ;;
esac
