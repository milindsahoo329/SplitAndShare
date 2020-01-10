var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var friendSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    uid: String,
    pwd:   String
});

//var friend = mongoose.model('friends', friendSchema);

//exports.friend = friend;

module.exports =  mongoose.model('friends', friendSchema);
