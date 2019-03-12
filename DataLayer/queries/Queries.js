const queryForListOf = (field, table) => {
  return `SELECT DISTINCT ${field} FROM ${table};`
}

const queryForBuilding = param => {
  return `SELECT * from classrooms WHERE building = '${param}'`
}

const queryForRoom = (par1, par2) => {
  return `SELECT * FROM classrooms WHERE building = '${par1}' AND roomNumber = '${par2}'`
}

module.exports = {
  queryForListOf,
  queryForBuilding,
  queryForRoom,
}
