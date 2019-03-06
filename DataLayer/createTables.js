const conn = require('./connection')

conn.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`)
    return
  }
  console.log(`Connected as: ${conn.threadId}`)
})

// Create devices table
conn.query(
  `
	CREATE TABLE IF NOT EXISTS devices (
		id int(11) NOT NULL PRIMARY KEY,
		name varchar(200) NOT NULL, 
		hasHDMI varchar(200) NOT NULL,
		hasVGA varchar(200) NOT NULL,
		adapterHDMI varchar(200) NOT NULL,
		adapterVGA varchar(200) NOT NULL, 
		linkHDMI varchar(200) NOT NULL, 
		linkVGA varchar(200) NOT NULL
	);
`,
  (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
  },
)

// Create classroom table
conn.query(
  `
	CREATE TABLE IF NOT EXISTS classrooms (
		id int(11) NOT NULL PRIMARY KEY,
		building varchar(200) NOT NULL,
		roomNumber varchar(20) NOT NULL, 
		hasHDMI varchar(200) NOT NULL,
		hasVGA varchar(200) NOT NULL
	);
`,
  (err, rows, fields) => {
    if (err) throw err
    console.log(rows)
  },
)

conn.end()
