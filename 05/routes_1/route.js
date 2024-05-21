'use strict'

// test_route.js

module.exports = (router) => {

var ctlr = require('../controllers/ctlr')

router.route('/')
  .get(ctlr.test_1)

}
