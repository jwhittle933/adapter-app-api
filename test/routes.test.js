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
    it('/api/buildings should respond with Array of building names', done => {
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
  const buildings = ['norton', 'carver', 'library', 'cooke', 'rankin']
  buildings.forEach(building => {
    describe('GET /api/buildings/norton', () => {
      it('/api/buildings/norton should respond with Array of room data', done => {
        chai
          .request(app)
          .get(`/api/buildings/${building}`)
          .end((err, res) => {
            if (err) done(new Error(err))
            expect(err).to.be.null // connection successful
            res.should.have.status(200) // good request'
            if (building === 'norton') {
              expect(res.res.text).to.include('11')
              expect(res.res.text).to.include('101')
              done()
            } else if (building === 'carver') {
              expect(res.res.text).to.include('108')
              expect(res.res.text).to.include('135')
              done()
            } else if (building === 'library') {
              expect(res.res.text).to.include('Crismon')
              expect(res.res.text).to.include('Mullins')
              done()
            } else if (building === 'cooke') {
              expect(res.res.text).to.include('8')
              expect(res.res.text).to.include('CCRH')
              done()
            } else if (building === 'rankin') {
              expect(res.res.text).to.include('101')
              expect(res.res.text).to.include('201')
              done()
            }
          })
      })
    })
  })
  describe('GET /api/devices', () => {
    it('/api/devices should respond with Array of device objects', done => {
      chai
        .request(app)
        .get(`/api/devices`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('Apple iPad')
          expect(res.res.text).to.include('Seminary Issue Dell Laptop')
          done()
        })
    })
  })
})
