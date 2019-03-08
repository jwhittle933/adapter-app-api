const queryAll = table => {
  return `SELECT * FROM ${table};`
}

const queryFor = (table, field, param) => {
  return `SELECT * from ${table} WHERE ${field} = ${param}`
}

module.exports = {
  queryAll,
}
