'use strict'

// amortization.js

module.exports = (router) => {

var amortization = require('../controllers/amortization')

router.route('/amortization')
  .post(amortization.amortize);
}
