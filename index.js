const express = require("express");

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);

// Adds route handler, 'get' type http request
app.get(
  "/auth/google", // first argument, kicks user into OAuth flow
  passport.authenticate("google", {
    scope: ["profile", "email"]   // asking google for profile and email
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));
// Exchanges the code received by google, to access the user profile

const PORT = process.env.PORT || 5000;
app.listen(PORT);
