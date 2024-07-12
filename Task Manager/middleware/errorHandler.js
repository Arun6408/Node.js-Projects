const {customAPIError } = require("../errors/customError");

const errorHandlerMiddleware=(err,req,res,next)=>{
    console.log(err);
    if(err instanceof customAPIError){
        return res.status(err.statusCode).json({msg:err.message});
    }
    return res.status(500).json({'msg':'Internal Server Error please try again'})
}

module.exports=errorHandlerMiddleware;