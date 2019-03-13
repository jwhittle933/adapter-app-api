echo "\nWould you like the server to restart as you make changes? (y/n)"
read UPDATE
if [ $UPDATE = 'y' ]; then
  echo "\nStarting the watch server in $ENV mode."
  yarn watch
else 
  echo "\nStarting the server in $ENV mode."
  yarn start
fi