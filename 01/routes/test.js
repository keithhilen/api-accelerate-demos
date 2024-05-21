module.exports = (router) => {

var test = require('../controllers/test')

router.route('/')
  .get(test.get);
}
