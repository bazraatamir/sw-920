const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host:"localhost",
    user:"root",
    database:"students",
    password:"12345678",
    connectionLimit:2,
}).promise()

module.exports = pool