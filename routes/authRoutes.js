const passport = require("passport");

// Route handler for Google Oauth
// Scope is an options object that specifies to Google what to get back
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  // User will visit this route once they get the code back from Google
  app.get("/auth/google/callback", passport.authenticate("google"));
};
