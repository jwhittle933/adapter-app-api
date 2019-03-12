touch secret.env
echo "Created secret.env"
echo "\nWhat is your database hostname?"
read DB_HOST && echo "DB_HOST=$DB_HOST" >> secret.env
echo "\nWhat is your database username?"
read DB_USER && echo "DB_USER=$DB_USER" >> secret.env
echo "\nWhat is your database password?"
read DB_PASSWORD && echo "DB_PASSWORD=$DB_PASSWORD" >> secret.env
echo "\nWhat is the name of your database?"
read DATABASE && echo "DATABASE=$DATABASE" >> secret.env
echo "\nWrote secret.env file:\n"
cat secret.env
