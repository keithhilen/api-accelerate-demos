'use strict'

// routes/auth.js

module.exports = (router, app) => {

var auth = require('../controllers/auth.js');

router.route('/auth')
  .post(auth.login)
  .get(auth.authenticate, auth.check);
};
