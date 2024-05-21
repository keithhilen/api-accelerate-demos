'use strict'

// test.js

module.exports = (router) => {

var test = require('../controllers/test')

router.route('/')
  .get(test.get);
}
