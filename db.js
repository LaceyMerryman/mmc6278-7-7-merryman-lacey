const mysql = require('mysql2/promise');

const connection = process.env.JAWSDB_URL
  ? mysql.createPool(process.env.JAWSDB_URL)
  : mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: process.env.DB_PASSWORD,
      database: 'music_shop_db'
    });

module.exports = connection;
