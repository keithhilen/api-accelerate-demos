'use strict'

// models/accounts.js
const md5 = require('md5');

const accounts = [];

exports.initialize = (app, config) => {

  var params = config.auth || {};
  var password_salt = params.password_salt;

  const hash = (password) => {
    return md5(password + password_salt)
  }

  // Create demo accounts
  accounts.push({
    account_id: 1,
    user_name: 'user1@test.net',
    password: hash('Orange123!')
  });

  accounts.push({
    account_id: 2,
    user_name: 'user2@test.net',
    password: hash('AlreadyDid%5')
  });  
}

exports.authenticate = async (context, params) => {
  return new Promise(async (resolve, reject) => {
    try {

      var user_name = params.user_name;
      var password = params.password;

      for (var account of accounts) {
        if ((account.user_name == user_name) && (account.password == password)) {
          return resolve({
            account_id: account.account_id,
            user_name: account.user_name
          })
        }
      }
      throw new (require('api-accelerate').errors.NotFoundError)("User not found", user_name);

    } catch(e) {
      reject(e);
    }
  });
}
