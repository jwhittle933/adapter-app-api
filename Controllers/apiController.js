/* eslint-disable no-console */
const queries = require('../DataLayer/queries/Queries')
const conn = require('../DataLayer/connection')

const Controllers = {
  buildingsController: (req, res) => {
    const { queryForListOf } = queries
    conn.query(queryForListOf('building', 'classrooms'), (err, results) => {
      if (err) return err
      res.status(200).json(results.map(x => x.building))
    })
  },
  roomsController: (req, res) => {
    const { queryForBuilding } = queries
    conn.query(queryForBuilding(req.params.building), (err, results) => {
      if (err) return console.error(err)
      res.status(200).json(results)
    })
  },
  roomController: (req, res) => {
    const { queryForRoom } = queries
    conn.query(
      queryForRoom(req.params.building, req.params.room),
      (err, results) => {
        if (err) return console.error(err)
        res.status(200).json(results)
      },
    )
  },
  deviceController: (req, res) => {
    const { queryForDevice } = queries
    conn.query(queryForDevice(req.params.device), (err, results) => {
      if (err) return console.error(err)
      res.status(200).json(results)
    })
  },
  devicesController: (req, res) => {
    const { queryForListOf } = queries
    conn.query(queryForListOf('*', 'devices'), (err, results) => {
      if (err) return console.error(err)
      res.status(200).json(results)
    })
  },
}

module.exports = Controllers
