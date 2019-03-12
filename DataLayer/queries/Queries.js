const queryForListOf = (field, table) => {
  return `SELECT DISTINCT ${field} FROM ${table};`
}

const queryFor = (table, field, param) => {
  return `SELECT * from ${table} WHERE ${field} = '${param}'`
}

module.exports = {
  queryForListOf,
  queryFor,
}
