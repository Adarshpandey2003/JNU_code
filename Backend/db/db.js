const { Client } = require('pg')
 
const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'covid',
  password: 'Adarsht1234',
})

module.exports = db