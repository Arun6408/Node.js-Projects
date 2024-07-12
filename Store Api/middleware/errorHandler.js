const { customAPIError } = require("../customErrors/customError");

const errorHandlerMiddleware= (err,req,res,next)=>{
    if(err instanceof customAPIError){
        res.status(err.statusCode).json({msg:err.message});
    }
    console.log(err);
    res.status(500).json({msg:"Internal Server Error try again"});
}

module.exports=errorHandlerMiddleware;  