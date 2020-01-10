var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/splitandshare', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// check if database is connected
// db.once('open', function() {
//   // we're connected!
// });

module.exports = {
  friends: require('./friends')
}
