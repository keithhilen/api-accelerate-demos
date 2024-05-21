'use strict'

// config.js

module.exports = {
  server:{
    port:                process.env.PORT        || 10005,
    prettify_json:         true
  },

  routers: [
    {
      path: "/test1",
      folder: "routes_1"
    },
    {
      path: "/test2",
      folder: "routes_2"
    },
    {
      path: "/",
      folder: "routes"
    }
  ],

  logger: {
    system:              true,
    trace:               true,
    request:             true,
    exception:           true,
  }
}
