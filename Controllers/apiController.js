/* eslint-disable no-console */
const queries = require('../DataLayer/queries/Queries')
const conn = require('../DataLayer/connection')

/* Database Connection Helper Methods */
const connect = () => {
  conn.connect(err => {
    if (err) {
      console.log(`${err}`)
      return err.fatal
    }
    console.log(`\nConnected as: ${conn.threadId}\n`)
  })
}

const close = () => {
  conn.end()
}

/* Controller Methods */
const buildingsController = (req, res, conn) => {
  const connection = connect()
  const err = connection.on('error', () => {
    return err
  })

  if (err) return `There was an error: ${err.code}.`
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
