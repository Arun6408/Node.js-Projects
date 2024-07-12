const { BadRequestError, UnauthenticatedError } = require("../errors");
const User = require("../models/User")
const {StatusCodes}=require('http-status-codes')

const registor=async(req,res,next)=>{
    const createdUser=await User.create({...req.body});
    const token=createdUser.getToken();
    res.status(StatusCodes.CREATED).json({user:{name:createdUser.getName()},token});
}

const login=async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password){
        throw new BadRequestError('Please Provide Email and Password as well');
    }
    const loggedUser=await User.findOne({email});
    if(!loggedUser){
        throw new UnauthenticatedError('User Not Found! Registor First!!!');
    }
    const isPasswordCorrect=await loggedUser.comparePassword(password);
    const token=loggedUser.getToken(); 
    if(isPasswordCorrect){
        res.status(StatusCodes.OK).json({msg:"success",user:{name:loggedUser.getName()},token:token});
    }
    else{
        throw new BadRequestError("Invalid Email or Password");
    }
}

module.exports={
    registor,login
}