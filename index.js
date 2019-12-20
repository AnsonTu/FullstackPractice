// Import the express library using common js module
const express = require("express");
// Import the passport library and the strategy that we're using
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// Import the keys object for Google OAuth
const keys = require("./config/keys");

// Generate new express app
const app = express();

// Tell the passport library to use the new Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);

// Route handler for Google Oauth
// Scope is an options object that specifies to Google what to get back
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);
// User will visit this route once they get the code back from Google
app.get("/auth/google/callback", passport.authenticate("google"));

// Get the app's port from env variable if it is available
const PORT = process.env.PORT || 5000;
app.listen(PORT);
