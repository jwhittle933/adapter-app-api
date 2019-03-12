echo "\nWould you like to start the server in dev or prod?"
read ENV
case $ENV in 
prod) 
  echo "\nStarting in ${ENV} mode.\n"
  set_prod_env
  ;;
dev) 
  echo "\nStarting in ${ENV} mode.\n"
  set_dev_env
  ;;
*)
  echo "\nSorry, that's not a valid value.\n"
  start_server
  ;;
esac
