
var connection = require('mysql2');
var db = connection.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'anand',
  database: 'covid_data'
});

module.exports = db