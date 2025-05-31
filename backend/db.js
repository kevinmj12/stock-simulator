const mysql = require('mysql2/promise'); // ✅ 빠졌던 줄 추가!
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // ✅ 포트도 .env에서 읽음
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: 'utf8mb4' // ✅ 한글 깨짐 방지
});

module.exports = pool;
