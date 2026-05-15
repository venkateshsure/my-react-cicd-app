const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
// const db = mysql.createConnection({
//   host: "db",
//   user: "root",
//   password: "root",
//   database: "testdb",
// });

// db.connect((err) => {
//   if (err) {
//     console.log("DB connection failed:", err);
//   } else {
//     console.log("Connected to MySQL");
//   }
// });

// API
app.get("/employee", (req, res) => {
  db.query("SELECT * FROM employee", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
 console.log("GET /employee called");

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});