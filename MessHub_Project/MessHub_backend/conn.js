var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3307,
    user: process.env.DB_USER || 'root', 
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mace_project_db',
    charset: 'utf8mb4'
});

var exe = util.promisify(pool.query).bind(pool);

module.exports = exe;
