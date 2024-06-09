'use strict'

// persons.js

module.exports = (router) => {

var auth = require('../controllers/auth')
var persons = require('../controllers/persons')

router.route('/persons')
  .get(auth.authenticate, persons.list)
  .post(auth.authenticate, persons.create);

router.route('/persons/:person_id')
  .get(auth.authenticate, persons.get)
  .put(auth.authenticate, persons.update);
}
