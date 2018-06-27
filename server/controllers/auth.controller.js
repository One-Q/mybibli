import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import config from '../config/config';
import User from '../models/user.model';

// sample user, used for authentication
const user = {
  username: 'react',
  password: 'express'
};

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function login(req, res, next) {

  let email = req.body.email;
  let password = req.body.password;

  User.findOne({email}).then((user) => {
    if(user) {
      if(user.validatePassword(password)) {
        let payload = {
          id: user.id,
          email: user.email
        }
        let token = jwt.sign(payload, config.jwtSecret)
        return res.json({token})
      } else {
        return res.status(400).json({ error: "Mot de passe incorrect" });
      }
    } else {
      return res.status(400).json({ error: "Utilisateur introuvable" });
    }
  })
}

/**
 * This is a protected route. Will return random number only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomNumber(req, res) {
  // req.user is assigned by jwt middleware if valid token is provided
  return res.json({
    user: req.user,
    num: Math.random() * 100
  });
}

function register(req, res) {
  
  Promise.all([checkEmail(req.body.email), checkUsername(req.body.username)]).then(() => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
    });

    user.password = user.generatehash(req.body.password) 

    user.save()
      .then(savedUser => {
        let payload = {
          id: savedUser.id,
          email: savedUser.email
        }
        let token = jwt.sign(payload, config.jwtSecret)
        return res.json({token})
      })
      .catch(e => {
        console.log(e)
        return res.status(500).json({
        error: 'Erreur interne'
        })
      });
  }).catch((error) => {
    return res.status(400).json({ error: error });
  })

}

function checkEmail(email) {
  return new Promise((res, rej) => {
    User.findOne({ email: email }).then((user) => {
        if (!user)
            res(true);
        else
            rej('Email déjà utilisé.');
    });
  })

}

function checkUsername(username) {
  return new Promise((res, rej) => {
      User.findOne({ username: username }).then((user) => {
          if (!user)
              res(true);
          else
              rej('Nom d\'utilisateur déjà utilisé.');
      });
  })
}


export default { login, getRandomNumber, register };
