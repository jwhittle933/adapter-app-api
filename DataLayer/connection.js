require('dotenv').config()
const mysql = require('mysql')

const checkENV = () => {
  process.env.LOCAL ? true : false
}

const conn = mysql.createConnection({
  host: checkENV()
    ? process.env.DB_HOST
    : 'k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: checkENV() ? process.env.DB_USER : 'er29i2h6ifrjtthg',
  password: checkENV() ? process.env.DB_PASSWORD : 'xernsn3j6tg6r62y',
  database: checkENV() ? process.env.DATABASE : 'd5wpu58rb2hc79eo',
})

module.exports = conn
