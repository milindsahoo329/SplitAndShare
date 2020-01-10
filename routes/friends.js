var controller = require('./../controller');

module.exports = function (app) {
  app.post('/getFriendDetails',controller.friends.details.getFriendDetails);
}
