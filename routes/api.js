/* eslint-disable no-console */
const express = require('express')
const router = express.Router()
const displayLogTime = require('./Utils/timeHelpers.js')
const Controllers = require('../Controllers/apiController')

router.use((req, res, next) => {
  console.log(displayLogTime(req))
  next()
})

router.get('/', (req, res) => {
  res.status(200).sendFile('index.html', {
    root: './frontend/dist/',
  })
})

// Fetches an array of building names
router.get('/buildings', (req, res) => {
  Controllers.buildingsController(req, res)
})

// Fetches an array of room objects based on the value passed in for :building
router.get('/buildings/:building', (req, res) => {
  Controllers.roomsController(req, res)
})

// Fetches info for specific room by :building and :room
router.get('/buildings/:building/:room', (req, res) => {
  Controllers.roomController(req, res)
})

// Fetches array of devices
router.get('/devices', (req, res) => {
  Controllers.devicesController(req, res)
})

// Fetches specific device object
router.get('/devices/:device', (req, res) => {
  Controllers.deviceController(req, res)
})

module.exports = router
