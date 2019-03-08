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
const buildingsController = (req, res) => {
  const resp = connect()
  if (resp) return `There was an error: ${resp.code}.`
  const { queryForListOf } = queries
  conn.query(queryForListOf('building', 'classrooms'), (err, results) => {
    if (err) return err
    console.log(results.map(x => x.building))
    res.status(200).json(results.map(x => x.building))
  })
  close()
}

const buildingController = (req, res) => {
  const resp = connect()
  if (resp) return `There was an error: ${resp.code}.`
  close()
}

const roomsController = (req, res) => {
  const resp = connect()
  if (resp) return `There was an error: ${resp.code}.`
  const { queryFor } = queries
  conn.query(queryFor('building', req.params.building), (err, results) => {
    if (err) return err
    console.log(results.map(x => x.building))
    res.status(200).json(results.map(x => x.building))
  })
  close()
}

const roomController = (req, res) => {
  const resp = connect()
  if (resp) return `There was an error: ${resp.code}.`
  close()
}

const deviceController = (req, res) => {
  const resp = connect()
  if (resp) return `There was an error: ${resp.code}.`
  close()
}

const devicesController = (req, res) => {
  const resp = connect()
  if (resp) return `There was an error: ${resp.code}.`
  close()
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
