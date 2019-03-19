/* eslint-disable */
process.env.NODE_ENV = 'test'
require('dotenv').config()
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const apiController = require('../Controllers/apiController')
const Queries = require('../DataLayer/queries/Queries')
const RoomList = require('../routes/Data/Classroomlist')
const Devices = require('../routes/Data/Devicelist')

describe('>>>>>>>>>>>> Database Query Tests <<<<<<<<<<<<<<<<', () => {
  describe('Query For a List', () => {
    it('Returns list of specified data', done => {
      done()
    })
  })
})
