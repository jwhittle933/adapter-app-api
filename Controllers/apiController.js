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
  roomsController: (req, res) => {
    const { queryForBuilding } = queries
    conn.query(queryForBuilding(req.params.building), (err, results) => {
      if (err) return console.error(err)
      console.log(results)
      res.status(200).json(results)
    })
  },
  roomController: (req, res) => {
    const { queryForRoom } = queries
    conn.query(
      queryForRoom(req.params.building, req.params.room),
      (err, results) => {
        if (err) return console.error(err)
        console.log(results)
        res.status(200).json(results)
      },
    )
  },
  deviceController: (req, res) => {
    if (resp) return `There was an error: ${resp.code}.`
    close()
  },
  devicesController: (req, res) => {
    if (resp) return `There was an error: ${resp.code}.`
    close()
  },
}

module.exports = Controllers
