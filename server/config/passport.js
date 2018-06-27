/*
const passport = require('passport'),
  User = require('../models/user.model'),
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  LocalStrategy = require('passport-local');

import config from './config';
// Setting username field to email rather than username
const localOptions = {
  usernameField: 'email'
};

// Setting up local login strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

      return done(null, user);
    });
  });
});
// Setting JWT strategy options
const jwtOptions = {
  // Telling Passport to check authorization headers for JWT
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  // Telling Passport where to find the secret
  secretOrKey: config.jwtSecret

  // TO-DO: Add issuer and audience checks
};


// Setting up JWT login strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  console.log(payload)
  User.findById(payload.id, (err, user) => {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
*/


import passport from 'passport';
import passportJWT, { ExtractJwt, Strategy } from 'passport-jwt';
import config from './config';

import User from '../models/user.model';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
};

module.exports = function() {
  let strategy = new Strategy(jwtOptions, function(payload, done) {
    User.findById(payload.id).then((user) => {
      if(user) {
        return done(null, user);
      } else {
        return done(new Error('User not found'), false);
      }
    })
  });
  passport.use(strategy);
  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate('jwt', {session: false});
    }
  }
}();

/*
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

import config from './config';

import User from '../models/user.model';

module.exports = function(passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
  };
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};
*/