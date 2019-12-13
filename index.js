// Import the express library using common js module
const express = require("express");

// Generate new express app
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "there" });
});

// Get the app's port from env variable if it is available
const PORT = process.env.PORT || 5000;
app.listen(PORT);
