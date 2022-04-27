const express = require("express");
const res = require("express/lib/response");
// port
const PORT = process.env.PORT || 3001;

const app = express();

// middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "hello world",
//   });
// });
app.use((req, res) => {
  res.status(404).end();
});

//express.js connection

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!`);
});
