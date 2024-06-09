'use strict'

// controllers/auth.js

const accounts = require('../models/accounts.js');

var login_user = null;
var authenticate_user = null;

exports.initialize = (app, config) => {

  login_user = app.handlers.create('login_user', app)
    .authenticate(accounts.authenticate);

  authenticate_user = app.handlers.create('authenticate_user', app);

}

exports.login = (req, res, next) => {
   return login_user(req, res, next);
}

exports.authenticate = (req, res, next) => {
   return authenticate_user(req, res, next);
}

exports.check = async (req, res, next) => {
  try {
    var context = req.context;
    context.responder.respond(req, res, context.session);

  } catch(e) {
    return context.responder.error(req,res,e)
  }
}
