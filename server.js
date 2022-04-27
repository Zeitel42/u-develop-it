const express = require("express");
const res = require("express/lib/response");
const mysql = require("mysql2");
// port
const PORT = process.env.PORT || 3001;

const app = express();

// middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to db
const db = mysql.createConnection(
  {
    host: "localHost",
    //username
    user: "root",
    //password
    password: "rootroot",
    database: "election",
  },
  console.log("Connected to the election database!")
);

//test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "hello world",
//   });
// });
db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

app.use((req, res) => {
  res.status(404).end();
});

//express.js connection

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!`);
});
