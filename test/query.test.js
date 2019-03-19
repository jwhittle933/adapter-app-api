/* eslint-disable */
process.env.NODE_ENV = 'test'
require('dotenv').config()
const chai = require('chai'),
  expect = chai.expect,
  chaiHttp = require('chai-http'),
  conn = require('../DataLayer/connection'),
  should = chai.should(),
  apiController = require('../Controllers/apiController'),
  Queries = require('../DataLayer/queries/Queries'),
  RoomList = require('../routes/Data/Classroomlist'),
  Devices = require('../routes/Data/Devicelist')

const {
  queryForListOf,
  queryForBuilding,
  queryForRoom,
  queryForDevice,
} = Queries

describe('>>>>>>>>>>>> Database Query Tests <<<<<<<<<<<<<<<<', () => {
  describe('Query For a List', () => {
    it('Returns list of specified data', done => {
      conn.query(queryForListOf('building', 'classrooms'), (err, result) => {
        if (err) done(new Error(err))
        expect(result).to.not.be.null
      })
      done()
    })
  })
})
