/* eslint-disable no-console */
const express = require('express')
const router = express.Router()
const displayLogTime = require('./Utils/timeHelpers.js')
const removeDuplicates = require('./Utils/removeDuplicates.js')
const DeviceList = require('./Data/Devicelist.js')
const RoomList = require('./Data/Classroomlist.js')

router.use((req, res, next) => {
  console.log(displayLogTime(req))
  next()
})

router.get('/', (req, res) => {
  res.render('info')
})

// Fetches an array of building names
router.get('/buildings', (req, res) => {
  let buildings = removeDuplicates(RoomList.map(x => x.building))
  res.send(buildings)
})

// Fetches an array of room objects based on the value passed in for :building
router.get('/buildings/:building', (req, res) => {
  const building = req.params.building
  res.send(RoomList.filter(x => x.building === building))
})

// Fetchs array of rooms according to :building
router.get('/buildings/:building/rooms', (req, res) => {
  const building = req.params.building
  res.send(RoomList.filter(x => x.building === building).map(x => x.roomNumber))
})

// Fetches info for specific room by :building and :room
router.get('/buildings/:building/:room', (req, res) => {
  const building = req.params.building
  const room = req.params.room
  let data = RoomList.filter(x => x.building === building).filter(
    x => x.roomNumber == room,
  )
  res.send(data)
})

// Fetches array of devices
router.get('/devices', (req, res) => {
  res.send(DeviceList)
})

// Fetches specific device object
router.get('/devices/:device', (req, res) => {
  let device = req.params.device
  res.send(DeviceList.filter(x => x._id === device))
})

module.exports = router
