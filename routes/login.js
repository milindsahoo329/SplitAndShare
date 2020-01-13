var controller = require('./../controller');

module.exports = function (app) {
  app.post('/login',controller.user.login.loginUser);
}
