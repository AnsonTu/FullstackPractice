// Import the passport library and the strategy that we're using
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// Import the keys object for Google OAuth
const keys = require("../config/keys");

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
