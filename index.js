// Import the express library using common js module
const express = require("express");
// Import mongoose to connect to a Mongo database
const mongoose = require("mongoose");
const keys = require("./config/keys");
// Import the user model. This must be required before the passport import.
require("./models/User");
// Import the passport configuration.
// We're not assigning anything, so we can just require the file.
require("./services/passport");
// Import the authenticated routes handler
const authRoutes = require("./routes/authRoutes");

// Connect to MongoDB
mongoose.connect(keys.mongoURI);

// Generate new express app
const app = express();

// Call the app's routes
// Alternatively, we can write: require("./routes/authRoutes")(app);
authRoutes(app);

// Get the app's port from env variable if it is available
const PORT = process.env.PORT || 5000;
app.listen(PORT);
