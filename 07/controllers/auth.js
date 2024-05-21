'use strict'

// controllers/auth.js

const accounts = require('../models/accounts.js');

var login = null;
var authorization = null;

exports.configure = (context) => {
  login = context.auth.buildLogin();

  const validate = async (context, params) => {
    return new Promise(async (resolve, reject) => {

      try {
        var account = await accounts.authenticate(context,params);
        resolve(account);

      } catch(e) {
        reject(e);
      }
    });
  };

  login.setAction('validate', validate);

  authorization = context.auth.buildAuthorization();
}

exports.login = (req, res, next) => {
   return login.controller(req, res, next);
}

exports.authorize = (req, res, next) => {
   return authorization.controller(req, res, next);
}

exports.check = async (req, res, next) => {
  try {
    var context = req.context;
    context.responder.respond(req, res, context.session);

  } catch(e) {
    return context.responder.error(req,res,e)
  }
}
