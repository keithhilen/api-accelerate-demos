'use strict'

// test_route.js

module.exports = (router) => {

var ctlr = require('../controllers/ctlr')

router.route('/')
  .get(ctlr.hello_world)

router.route('/*')
  .get(ctlr.nothing)

}
