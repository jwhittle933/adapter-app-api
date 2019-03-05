require('dotenv').config()
const mysql = require('mysql')
const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

module.exports = conn

conn.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`)
    return
  }
  console.log(`Connected as: ${connection.threadId}`)
})

conn.end()
