require('dotenv').config()
const mysql = require('mysql')
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
})

conn.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`)
    return
  }
  console.log(`Connected as: ${conn.threadId}`)
})

conn.query(
  `
	CREATE TABLE IF NOT EXISTS 'devices' (
		'id' int(11) NOT NULL PRIMARY KEY,
		'name' varchar(200) NOT NULL, 
		'hasHDMI' varchar(200) NOT NULL,
		'hasVGA' varchar(200) NOT NULL,
		'adapterHDMI' varchar(200) NOT NULL,
		'adapterVGA' varchar(200) NOT NULL, 
		'linkHDMI' varchar(200) NOT NULL, 
		'linkVGA' varchar(200) NOT NULL
	)
`,
  (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
  },
)

conn.end()

module.exports = conn
