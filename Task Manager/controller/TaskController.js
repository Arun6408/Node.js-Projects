const { createCustomError } = require('../errors/customError');
const asyncWrapper = require('../middleware/asyncWrapper');
const Task=require('../models/tasks');

const getAllTasks=asyncWrapper(async (req,res)=>{
    const allTasks =await Task.find();
    res.status(200).json({tasks:allTasks,count:allTasks.length,"success":true});

})
const createTask=asyncWrapper(async (req,res)=>{
    const task =await Task.create(req.body);
    res.status(201).json({"task":"created","status":"success"});
})

const getSingleTasks = asyncWrapper(async (req, res,next) => {
    const { id: taskId } = req.params;
    const singleTask = await Task.findOne({ "_id": taskId });
    if (!singleTask) {
        return next(createCustomError(`No Task with the id ${taskId}`,404));
    }
    res.status(200).json(singleTask);
})

const updateTask=asyncWrapper(async(req,res,next)=>{
    const { id: taskId } = req.params;
    const updatingTask = await Task.findOneAndUpdate({ "_id": taskId },req.body);
    if (!updatingTask) {
        return next(createCustomError(`No Task with the id ${taskId}`,404));
    }
    res.status(200).json({"task":"updated","status":"success"});
})
const deleteTask=asyncWrapper(async(req,res)=>{
    const { id: taskId } = req.params;
    const deletingTask = await Task.findOneAndDelete({ "_id": taskId });
    if (!deletingTask) {
        return next(createCustomError(`No Task with the id ${taskId}`,404));
    }
    res.status(200).json(deletingTask);
})

module.exports={
    getAllTasks,createTask,getSingleTasks,updateTask,deleteTask
};