const notFound=(req,res)=>{
    res.status(404).json({msg:"Route doesnt exist"});
}

module.exports=notFound;