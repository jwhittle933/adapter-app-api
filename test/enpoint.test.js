/* eslint-disable */
process.env.NODE_ENV = 'test'
require('dotenv').config()
const chai = require('chai'),
  chaiHttp = require('chai-http'),
  should = chai.should,
  expect = chai.expect,
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
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(404) // bad request
          done()
        })
    })
  })
  describe('GET /api', () => {
    it('Should return code and message', done => {
      chai
        .request(app)
        .get(`/api`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request
          done()
        })
    })
  })
  describe('GET /api/buildings', () => {
    it('Should respond with array of data', done => {
      chai
        .request(app)
        .get(`/api/buildings`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          console.log(res.res.tes)
          expect(res.res.text).to.not.be.null
          expect(res.res.text).to.equal(
            `["norton","cooke","library","carver","rankin"]`,
          )
          done()
        })
    })
  })
})
