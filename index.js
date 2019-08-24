const express = require('express')
const bodyParser = require('body-parser');
const config = require ('./config')
const routes = require("./routes.js")
const notesController = require ('./controllers/notes')

const app = express()

var passport = require('passport'),LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

app.use('/',routes)

app.listen(config.SERVER_PORT, () => console.log(`Notes app listening on port ${config.SERVER_PORT}!`))