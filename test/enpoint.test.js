/* eslint-disable */
process.env.NODE_ENV = 'test'
require('dotenv').config()
const chai = require('chai'),
  chaiHttp = require('chai-http'),
  should = chai.should(),
  apiController = require('../Controllers/apiController'),
  Queries = require('../DataLayer/queries/Queries'),
  RoomList = require('../routes/Data/Classroomlist'),
  Devices = require('../routes/Data/Devicelist'),
  app = require('../app.js')

chai.use(chaiHttp)

describe('Endpoint Test', () => {
  describe('Bad Request', () => {
    it('Should return code and message', done => {
      let badPath = 'sdlkf'
      chai
        .request(app)
        .get(`/${badPath}`)
        .end(async (err, res) => {
          if (err) done(new Error(err))
          await res.should.have.status(404)
          done()
        })
    })
  })
  describe('GET /api', () => {
    it('Should return code and message', done => {
      chai
        .request(app)
        .get(`/api`)
        .end(async (err, res) => {
          if (err) done(new Error(err))
          await res.should.have.status(200)
          done()
        })
    })
  })
})
