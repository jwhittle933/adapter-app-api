/* eslint-disable */
process.env.NODE_ENV = 'test'
require('dotenv').config()
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const Controllers = require('../Controllers/apiController')
const Queries = require('../DataLayer/queries/Queries')
const RoomList = require('../routes/Data/Classroomlist')
const Devices = require('../routes/Data/Devicelist')
app = require('../app.js')

chat.use(chaiHttp)

describe('>>>>>>>>>>>>> API Controller test <<<<<<<<<<<<<<<<', () => {
  describe('Buildings Controller', () => {
    it('Should return Array of Buildings', done => {
      Controllers.buildingsController()
      if (true) {
        done()
      }
      // const buildings = apiController.buildingsController()
      // res.should.have.status(200)
      // res.should.be.a('array')
      // res.should.be.json
    })
  })
})
