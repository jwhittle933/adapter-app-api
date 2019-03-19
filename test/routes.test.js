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

describe('>>>>>>>>>> Routes Tests <<<<<<<<<<<<', () => {
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
          expect(res.res.text).to.be.json
          done()
        })
    })
  })
  describe('GET /', () => {
    it('Should return a redirect', done => {
      chai
        .request(app)
        .get(`/`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          expect(res.redirects).to.not.be.null
          res.should.have.status(200) // good request
          done()
        })
    })
  })
  describe('GET /healthcheck', () => {
    it('Should return Adele', done => {
      chai
        .request(app)
        .get(`/healthcheck`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request
          expect(res.res.text).to.include('Hello from the A-P-I')
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
  describe('GET /api/buildings/norton', () => {
    it('/api/buildings/norton should respond with Array of room data', done => {
      chai
        .request(app)
        .get(`/api/buildings/norton`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('11')
          expect(res.res.text).to.include('101')
          done()
        })
    })
  })
  describe('GET /api/buildings/carver', () => {
    it('/api/buildings/carver should respond with Array of room data', done => {
      chai
        .request(app)
        .get(`/api/buildings/carver`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('108')
          expect(res.res.text).to.include('135')
          expect(res.res.text).to.include('hasHDMI')
          done()
        })
    })
  })
  describe('GET /api/buildings/library', () => {
    it('/api/buildings/library should respond with Array of room data', done => {
      chai
        .request(app)
        .get(`/api/buildings/library`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('Crismon')
          expect(res.res.text).to.include('Mullins')
          expect(res.res.text).to.include('hasHDMI')
          done()
        })
    })
  })
  describe('GET /api/buildings/cooke', () => {
    it('/api/buildings/cooke should respond with Array of room data', done => {
      chai
        .request(app)
        .get(`/api/buildings/cooke`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('8')
          expect(res.res.text).to.include('CCRH')
          expect(res.res.text).to.include('hasHDMI')
          done()
        })
    })
  })
  describe('GET /api/buildings/rankin', () => {
    it('/api/buildings/rankin should respond with Array of room data', done => {
      chai
        .request(app)
        .get(`/api/buildings/rankin`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('101')
          expect(res.res.text).to.include('201')
          expect(res.res.text).to.include('hasHDMI')
          done()
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
          expect(res.res.text).to.include('hasHDMI')
          done()
        })
    })
  })
  describe('GET /api/devices/apple-ipad', () => {
    it('/api/devices/:device should respond with Array of a single device objects', done => {
      chai
        .request(app)
        .get(`/api/devices/apple-ipad`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('Apple iPad')
          expect(res.res.text).to.include('hasHDMI')
          expect(res.res.text).to.include('adapterHDMI')
          done()
        })
    })
  })
  describe('GET /api/devices/apple-iphone', () => {
    it('/api/devices/:device should respond with Array of a single device objects', done => {
      chai
        .request(app)
        .get(`/api/devices/apple-iphone`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('Apple iPhone')
          expect(res.res.text).to.include('hasHDMI')
          expect(res.res.text).to.include('adapterHDMI')
          done()
        })
    })
  })
  describe('GET /api/devices/macbook-2017-present', () => {
    it('/api/devices/:device should respond with Array of a single device objects', done => {
      chai
        .request(app)
        .get(`/api/devices/macbook-2017-present`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('Macbook 2017-present')
          expect(res.res.text).to.include('hasHDMI')
          expect(res.res.text).to.include('adapterHDMI')
          done()
        })
    })
  })
  describe('GET /api/devices/macbook-air-2011-2014', () => {
    it('/api/devices/:device should respond with Array of a single device objects', done => {
      chai
        .request(app)
        .get(`/api/devices/macbook-air-2011-2014`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('Macbook Air 2011-2014')
          expect(res.res.text).to.include('hasHDMI')
          expect(res.res.text).to.include('adapterHDMI')
          done()
        })
    })
  })
  describe('GET /api/devices/macbook-pro-2011-2014', () => {
    it('/api/devices/:device should respond with Array of a single device objects', done => {
      chai
        .request(app)
        .get(`/api/devices/macbook-pro-2011-2014`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('Macbook/Macbook Pro 2011-2014')
          expect(res.res.text).to.include('hasHDMI')
          expect(res.res.text).to.include('adapterHDMI')
          done()
        })
    })
  })
  describe('GET /api/devices/seminary-dell', () => {
    it('/api/devices/:device should respond with Array of a single device objects', done => {
      chai
        .request(app)
        .get(`/api/devices/seminary-dell`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('Seminary Issue Dell Laptop')
          expect(res.res.text).to.include('hasHDMI')
          expect(res.res.text).to.include('adapterHDMI')
          done()
        })
    })
  })
  describe('GET /api/devices/surface', () => {
    it('/api/devices/:device should respond with Array of a single device objects', done => {
      chai
        .request(app)
        .get(`/api/devices/surface`)
        .end((err, res) => {
          if (err) done(new Error(err))
          expect(err).to.be.null // connection successful
          res.should.have.status(200) // good request'
          expect(res.res.text).to.include('Surface/Surface Pro')
          expect(res.res.text).to.include('hasHDMI')
          expect(res.res.text).to.include('adapterHDMI')
          done()
        })
    })
  })
})
