const conn = require('./connection')
const rooms = require('../routes/Data/Classroomlist.js')
const devices = require('../routes/Data/Devicelist.js')

conn.connect(err => {
  err
    ? console.error(`error connecting: ${err.stack}`)
    : console.log(`Connected as: ${conn.threadId}`)
})

// Migrate room data
rooms.map(room => {
  conn.query(
    `
		INSERT INTO classrooms (
			building, 
			roomNumber, 
			hasHDMI, 
			hasVGA
		)
		VALUES (
			'${room.building}', 
			'${room.roomNumber}', 
			'${room.hasHDMI}', 
			'${room.hasVGA}'
		);
	`,
    (err, results) => {
      if (err) {
        console.error(err)
        throw err
      }
      console.info(`Succesfully entered ${results.length} rows.`)
    },
  )
})

// Migrate device data
devices.map(device => {
  conn.query(
    `
		INSERT INTO devices (
			id, 
			name, 
			hasHDMI, 
			hasVGA, 
			adapterHDMI, 
			adapterVGA, 
			linkHDMI, 
			linkVGA
		)
		VALUES (
			'${device._id}', 
			'${device.name}', 
			'${device.hasHDMI}', 
			'${device.hasVGA}', 
			'${device.adapterHDMI}', 
			'${device.adapterVGA}', 
			'${device.linkHDMI}', 
			'${device.linkVGA}'
		);
	`,
    (err, results) => {
      if (err) {
        console.error(err)
        throw err
      }
      console.info(`Succesfully entered ${results.length} rows.`)
    },
  )
})

conn.end()
