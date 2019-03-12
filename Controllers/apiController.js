/* eslint-disable no-console */
const queries = require('../DataLayer/queries/Queries')
const conn = require('../DataLayer/connection')

const Controllers = {
  buildingsController: (req, res) => {
    const { queryForListOf } = queries
    conn.query(queryForListOf('building', 'classrooms'), (err, results) => {
      if (err) return err
      console.log(results.map(x => x.building))
      res.status(200).json(results.map(x => x.building))
    })
  },
  buildingController: (req, res) => {
    const resp = connect()
    if (resp) return `There was an error: ${resp.code}.`
    close()
  },
  roomsController: (req, res) => {
    const { queryFor } = queries
    conn.query(
      queryFor('classrooms', 'building', req.params.building),
      (err, results) => {
        if (err) return console.error(err)
        console.log(results)
        res.status(200).json(results)
      },
    )
    // close(connection)
  },
  roomController: (req, res) => {
    const resp = connect()
    if (resp) return `There was an error: ${resp.code}.`
    close()
  },
  deviceController: (req, res) => {
    const resp = connect()
    if (resp) return `There was an error: ${resp.code}.`
    close()
  },
  devicesController: (req, res) => {
    const resp = connect()
    if (resp) return `There was an error: ${resp.code}.`
    close()
  },
}

/* Database Connection Helper Methods */
const connect = conn => {
  conn.connect(err => {
    if (err) {
      console.log(`${err}`)
      return err.fatal
    }
    console.log(`\nConnected as: ${conn.threadId}\n`)
  })
}

const close = conn => {
  conn.end()
}

module.exports = Controllers
