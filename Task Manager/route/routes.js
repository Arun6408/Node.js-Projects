const express=require('express');
const { getAllTasks, createTask, getSingleTasks, updateTask, deleteTask } = require('../controller/TaskController');

const router=express.Router();


router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTasks).patch(updateTask).delete(deleteTask);

module.exports=router;