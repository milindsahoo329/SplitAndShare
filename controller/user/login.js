const Joi = require('joi');
const userDao = require("../../dao").user;

var loginUser = function(req,res,next){
  return new Promise ( function (resolve,reject) {

    const schema = Joi.object().keys({
      uid : Joi.string().required(),
      pwd : Joi.string().required()
    });

    return Joi.validate(req.body,schema,function(err,params){
      if(err){
        next(err);
        return;
      }
      userDao.login.confirmLogin(params.uid,params.pwd)
        .then((result)=>{
          res.status(200).send({
            result : result
          });
        });
    });

  });
}

exports.loginUser = loginUser;
