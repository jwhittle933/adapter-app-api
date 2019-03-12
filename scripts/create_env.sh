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
