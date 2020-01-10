const models = require("../../models");

var getFriendDetails = function(friendId){
  return new Promise( async function ( resolve, reject ) {
    let result = await models.friends.find({uid:friendId});
    return resolve(result);
  });
}

exports.getFriendDetails = getFriendDetails;
