module.exports = async (context, config) => {

require('./controllers/auth.js').configure(context);
require('./models/accounts.js').configure(context);
}
