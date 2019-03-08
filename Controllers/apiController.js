const queries = require('../DataLayer/queries/Queries')
const conn = require('../DataLayer/connection')

/* Database Connection Helper Methods */
const connect = () => {
  conn.connect(err => {
    if (err) return console.error(`error connecting: ${err.stack}`)
    console.log(`\nConnected as: ${conn.threadId}\n`)
  })
}

const close = () => {
  conn.end()
}

/* Controller Methods */
const buildingsController = (req, res, conn) => {
  connect() // test to make sure of connection; break if not

  const { queryForListOf } = queries
  let query = conn.query(
    queryForListOf('building', 'classrooms'),
    (err, results) => {
      //
    },
  )
  res.send(query)

  close()
}

const buildingController = (req, res, conn) => {
  /* check for Authentication
   * Query database
   * Send res
   */
}

const roomsController = (req, res, conn) => {
  /* check for Authentication
   * Query database
   * Send res
   */
}

const roomController = (req, res, conn) => {
  /* check for Authentication
   * Query database
   * Send res
   */
}

const deviceController = (req, res, conn) => {
  /* check for Authentication
   * Query database
   * Send res
   */
}

const devicesController = (req, res, conn) => {
  /* check for Authentication
   * Query database
   * Send res
   */
}

const controllers = {
  buildingController,
  buildingsController,
  roomController,
  roomsController,
  deviceController,
  devicesController,
}

module.exports = controllers
