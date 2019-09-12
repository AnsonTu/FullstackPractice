// Import the express library using common js module
const express = require("express");

// Generate new express app
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);
