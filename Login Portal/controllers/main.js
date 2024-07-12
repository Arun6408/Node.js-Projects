const jwt=require('jsonwebtoken')
const { BadRequestError } = require('../errors');

const login=(req,res)=>{
    const {username,password}=req.body;

    if(!username || !password){
        throw new BadRequestError('Bad Request Username or Password not given');
    }
    const id=new Date().getDate();
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'});
    res.status(200).json({"msg":"User Created","token":`${token}`});
}


const dashboard=(req,res)=>{
    const secretCode=Math.floor(Math.random()*100+1)
    res.status(200).json({msg:`Hey ${req.user.username}, Your Secrect Code is ${secretCode}`});   
}

module.exports={
    login,dashboard
};