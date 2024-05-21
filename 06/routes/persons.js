'use strict'

// persons.js

module.exports = (router) => {

var persons = require('../controllers/persons')

router.route('/persons')
  .get(persons.list)
  .post(persons.create);

router.route('/persons/:person_id')
  .get(persons.get)
  .put(persons.update);
}
