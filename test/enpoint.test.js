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
const api = require('../routes/api.js')

chai.use(chaiHttp)

describe('Endpoint Test', () => {
  describe('Bad Request', () => {
    it('Should return code and message', done => {
      let badPath = 'sdlkf'
      chai
        .request(api)
        .get(`/api/${badPath}`)
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    })
  })
  describe('GET /api', () => {
    it('Should return code and message', done => {
      chai
        .request(api)
        .get(`/api`)
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })
})
