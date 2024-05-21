'use strict'

// config.js

module.exports = {
  server:{
    port:                process.env.PORT        || 10004,
    prettify_json:       true
  },

  logger: {
    system:              true,
    trace:               true,
    request:             true,
    exception:           true,
  }
}
