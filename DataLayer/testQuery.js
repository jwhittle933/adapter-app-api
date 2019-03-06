const conn = require('./connection')

conn.connect(err => {
  err
    ? console.error(`error connecting: ${err.stack}`)
    : console.log(`Connected as: ${conn.threadId}`)
})

conn.query(`SELECT * FROM classrooms;`, (err, results) => {
  if (err) {
    console.error(err)
    throw err
  }
  console.info(`Successfully queried ${results.length} rows`)
})

conn.end()
