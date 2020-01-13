var friends = require('./friends');
var login = require('./login');

module.exports = function (app) {
  friends(app);
  login(app);
}
