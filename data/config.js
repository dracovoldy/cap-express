const mysql = require('mysql');

const config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Capsqlpass1!',
    database: 'appdb',
};

// Create a MySQL pool
const pool = mysql.createPool(config);
// Export the pool
module.exports = pool;
