const queries = require('../DataLayer/queries/Queries')
const conn = require('../DataLayer/connection')

const buildingsController = (req, res, conn) => {
  const { queryForListOf } = queries
  let buldings = queryForListOf('buildings', 'classrooms')
}

const buildingController = (req, res, conn) => {
  /* check for Authentication
   * Query database
   * Send res
   */
}

const roomsController = (req, res, conn) => {
  /* check for Authentication
   * Query database
   * Send res
   */
}

const roomController = (req, res, conn) => {
  /* check for Authentication
   * Query database
   * Send res
   */
}

const deviceController = (req, res, conn) => {
  /* check for Authentication
   * Query database
   * Send res
   */
}

const devicesController = (req, res, conn) => {
  /* check for Authentication
   * Query database
   * Send res
   */
}

const controllers = {
  buildingController,
  buildingsController,
  roomController,
  roomsController,
  deviceController,
  devicesController,
}

module.exports = controllers
