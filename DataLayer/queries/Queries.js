const queryForListOf = (field, table) => {
  return `SELECT DISTINCT ${field} FROM ${table};`
}

const queryFor = (field, param) => {
  return `SELECT * from classrooms WHERE ${field} = ${param}`
}

module.exports = {
  queryForListOf,
  queryFor,
}
