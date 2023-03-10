const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'food_truck_database',
  password: 'root',
  port: 5432,
});

module.exports = pool;