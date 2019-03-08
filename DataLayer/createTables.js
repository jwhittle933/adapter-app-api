const conn = require('./connection')

conn.connect(err => {
  if (err) {
    return console.error(`error connecting: ${err.stack}`)
  }
  console.log(`Connected as: ${conn.threadId}`)
})

// Create devices table
conn.query(
  `
	CREATE TABLE IF NOT EXISTS devices (
		id varchar(200) NOT NULL PRIMARY KEY,
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
    console.info(`${rows} affected. ${fields} added.`)
  },
)

// Create classroom table
conn.query(
  `
	CREATE TABLE IF NOT EXISTS classrooms (
		id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
		building varchar(200) NOT NULL,
		roomNumber varchar(20) NOT NULL, 
		hasHDMI varchar(200) NOT NULL,
		hasVGA varchar(200) NOT NULL
	);
`,
  (err, rows, fields) => {
    if (err) throw err
    console.info(`${rows} affected. ${fields} added.`)
  },
)

conn.end()
