require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("BhavinPatel2894");
});

app.get("/logins", (req, res) => {
  res.send("<h1>Please Login</h1> ");
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
