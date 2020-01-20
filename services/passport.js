// Import the passport library and the strategy that we're using
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// Import mongoose
const mongoose = require("mongoose");
// Import the keys object for Google OAuth
const keys = require("../config/keys");

const User = mongoose.model("users");

// Tell the passport library to use the new Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // A record with the given profile ID already exists
          done(null, existingUser);
        } else {
          // A record with the given profile ID doesn't exist, make a new one
          new User({ googleId: profile.id }).save().then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);
