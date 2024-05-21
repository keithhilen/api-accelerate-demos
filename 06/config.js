'use strict'

// config.js

module.exports = {
  server:{
    port:                process.env.PORT        || 10006,
    prettify_json:       true
  },

  logger: {
    system:              true,
    trace:               true,
    request:             true,
    exception:           true,
  },

  database: {
    name: "main",
    adapter:            "mysql",
    host:               process.env.DB_HOST        || 'localhost',
    port:               process.env.DB_PORT        || null,
    user:               process.env.DB_USER        || 'main',
    database:           process.env.DB_DATABASE    || 'aa_demo',
    password:           process.env.DB_PASSWORD    || 'password',
    connections:        process.env.DB_CONNECTIONS || 10,
    logging: {
      connections:      true,
      queries:          true
    }
  }
}
