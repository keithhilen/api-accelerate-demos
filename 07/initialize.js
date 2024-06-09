module.exports = async (app, config) => {
  require('./controllers/auth.js').initialize(app, config);
  require('./models/accounts.js').initialize(app, config);
}
