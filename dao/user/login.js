const models = require("../../models");

var confirmLogin = function(userid,pwd){
  return new Promise( async function ( resolve, reject ) {
    let result = await models.friends.find({uid:userid});
    if(result.pwd === pwd){
      return resolve(true);
    }
    return resolve(false);
  });
}

exports.confirmLogin = confirmLogin;
