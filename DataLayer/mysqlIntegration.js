require('dotenv').config()
const mysql = require('mysql')
const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

conn.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`)
    return
  }
  console.log(`Connected as: ${connection.threadId}`)
})

conn.query(
  `
	CREATE TABLE IF NOT EXISTS devices (
		id INT NOT NULL PRIMARY KEY,
		name VARCHAR NOT NULL, 
		hasHDMI VARCHAR NOT NULL,
		hasVGA VARCHAR NOT NULL,
		adapterHDMI VARCHAR NOT NULL,
		adapterVGA VARCHAR NOT NULL, 
		linkHDMI VARCHAR NOT NULL, 
		linkVGA VARCHAR NOT NULL
	)
`,
  (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
  },
)

conn.end()

module.exports = conn
