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
  describe('Query For a Building', () => {
    it('Returns an Array of room objects for a specific building', done => {
      const building = 'norton'
      conn.query(queryForBuilding(building), (err, result) => {
        if (err) done(new Error(err))
        expect(result).to.not.be.null
        expect(result.length).to.equal(22)
        expect(result[0].building).to.equal(building)
      })
      done()
    })
  })
  describe('Query For a Room', () => {
    it('Returns an Array with a room object for a specific building', done => {
      const roomNumber = '11'
      const building = 'norton'
      conn.query(queryForRoom(building, roomNumber), (err, result) => {
        if (err) done(new Error(err))
        expect(result).to.not.be.null
        expect(result.length).to.equal(1)
        expect(result[0].roomNumber).to.equal(roomNumber)
        expect(result[0].building).to.equal(building)
      })
      done()
    })
  })
  describe('Query For a Device', () => {
    it('Returns an Array with a device object', done => {
      const id = 'apple-ipad'
      conn.query(queryForDevice(id), (err, result) => {
        if (err) done(new Error(err))
        expect(result).to.not.be.null
        expect(result.length).to.equal(1)
        expect(result[0].id).to.equal(id)
      })
      done()
    })
  })
})
