/* eslint-disable */
/* prettier-diable */
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

describe('Routes Test', () => {
  describe('Bad Request', () => {
    it('Should return code and message', done => {
      let badPath = 'sdlkf'
      chai
        .request(app)
        .get(`/${badPath}`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          expect(res.status).to.equal(404) // bad request
          expect(res.res.text).to.deep.include(
            `Route /${badPath} not available.`,
          )
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
    it('Should respond with Array of building names', done => {
      chai
        .request(app)
        .get(`/api/buildings`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.not.be.null
          expect(res.res.text).to.include('norton')
          expect(res.header['access-control-allow-origin']).to.equal(
            'http://localhost:3000',
          )
          done()
        })
    })
  })
  describe('GET /api/buildings/norton', () => {
    it('Should respond with Array of room data', done => {
      chai
        .request(app)
        .get(`/api/buildings/norton`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.not.be.null
          done()
        })
    })
  })
})
