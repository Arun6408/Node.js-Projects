const { NotFoundError, BadRequestError } = require("../errors");
const Job = require("../models/Job");
const { StatusCodes } = require('http-status-codes');

const getAllJobs=async(req,res,next)=>{
    const allJobs=await Job.find({createdBy:req.user.userId});
    res.status(StatusCodes.OK).json({msg:"success",jobs:allJobs,count:allJobs.length});
}

const getJob=async(req,res,next)=>{
    const jobId=req.params.id,userId=req.user.userId;
    const singleJob= await Job.findOne({_id:jobId,createdBy:userId});
    if(!singleJob){
        throw new NotFoundError(`Job not found with User ${userId} and job ${jobId}`)
    }
    res.status(StatusCodes.OK).json({msg:"success",job:singleJob});
}

const createJob=async(req,res,next)=>{
    const {company,position}=req.body;
    if(!company|| !position){
        throw new BadRequestError('Company and Position are mandiatory feilds');
    }
    req.body.createdBy=req.user.userId;
    const createdJob=await Job.create({...req.body});
    res.status(StatusCodes.CREATED).json({msg:"Success",job:createdJob})
}

const updateJob=async(req,res,next)=>{
    const {company,position}=req.body;
    if(!company|| !position){
        throw new BadRequestError('Company and Position are mandiatory feilds');
    }
    const jobId=req.params.id,userId=req.user.userId;
    const updateJob= await Job.findByIdAndUpdate({_id:jobId,createdBy:userId},req.body,{
        new:true,runValidators:true
    });
    if(!updateJob){
        throw new NotFoundError(`Job not found with User ${userId} and job ${jobId}`)
    }
    res.status(StatusCodes.OK).json({msg:"success",job:updateJob});
}

const deleteJob=async(req,res,next)=>{
    const jobId=req.params.id,userId=req.user.userId;
    const deleteJob= await Job.findByIdAndRemove({_id:jobId,createdBy:userId});
    if(!deleteJob){
        throw new NotFoundError(`Job not found with User ${userId} and job ${jobId}`)
    }
    res.status(StatusCodes.OK).json({msg:"success",job:deleteJob});
}

module.exports={
    getAllJobs,getJob,createJob,updateJob,deleteJob
}
