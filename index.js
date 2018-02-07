const express = require("express");

const passport = require("passport");  // Gives express the idea of how to handle authentication
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// Instruct passport to exactly how to authenticate our users
const keys = require('./config/keys')

const app = express();

// console.developers.google.com
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
  }, (accessToken) => {
     console.log(accessToken);
  })
);

// initializes GoogleStrategy
// and tells Passport that there is a new strategy available and we want to use it

const PORT = process.env.PORT || 5000;
app.listen(PORT);
