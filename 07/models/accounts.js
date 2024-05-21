'use strict'

// models/accounts.js

const accounts = [];

exports.configure = (context) => {

  accounts.push({
    account_id: 1,
    user_name: 'user1@test.net',
    password: context.auth.hashPassword('Orange123!')
  });  

  accounts.push({
    account_id: 1,
    user_name: 'user2@test.net',
    password: context.auth.hashPassword('AlreadyDid%5')
  });  
}

const hashPassword = (context, password) => {
  return context.auth.hashPassword(password);
}

exports.authenticate = async (context, params) => {
  return new Promise(async (resolve, reject) => {
    try {

      var user_name = params.user_name;
      var password = context.auth.hashPassword(params.password);

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
