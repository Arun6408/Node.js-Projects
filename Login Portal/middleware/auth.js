const jwt=require('jsonwebtoken')
const CustomAPIError = require("../errors/custom-error");
const { UnauthorisedError } = require('../errors');


const authenticationMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    console.log(authHeader);
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthorisedError('Authorization Error: You cannot access this site');
    }
    const token=authHeader.split(' ')[1];
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const {id,username}=decoded;
        req.user={id,username};
        next();
    }
    catch{
        throw new UnauthorisedError('Authorization Error: You are not Authorised to this site'); 
    }
}

module.exports={
    authenticationMiddleware
};
