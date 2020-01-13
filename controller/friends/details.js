const Joi = require('joi');
const friendsDao = require("../../dao").friends;

var getFriendDetails = function (req, res, next) {
  return new Promise( async function ( resolve, reject ) {

    const schema = Joi.object().keys({
      friend_id : Joi.string().required()
    });

    return Joi.validate(req.body,schema,function(err,params){
      if(err){
        next(err);
        return;
      }
      friendsDao.details.getFriendDetails(params.friend_id)
      .then((result)=>{
        return res.status(200).send({
          data : result
        });
      });
    });

  });
}

exports.getFriendDetails = getFriendDetails;
