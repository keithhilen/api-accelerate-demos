'use strict'

// config.js

module.exports = {
  server:{
    port:                process.env.PORT        || 10007,
    prettify_json:       true
  },

  auth: {
    method:             'jwt',
    jwt_secret:         'y60hejhskhnu9s7lfa8b',
    jwt_expiration:     0, // Never expires
    password_salt:      'u8opjiw1hc'
  },
}
