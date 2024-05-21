'use strict'

// persons.js

module.exports = (router) => {

var auth = require('../controllers/auth')
var persons = require('../controllers/persons')

router.route('/persons')
  .get(auth.authorize, persons.list)
  .post(auth.authorize, persons.create);

router.route('/persons/:person_id')
  .get(auth.authorize, persons.get)
  .put(auth.authorize, persons.update);
}
