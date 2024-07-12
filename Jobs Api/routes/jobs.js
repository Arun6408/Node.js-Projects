
const express=require('express');
const { getAllJobs, createJob, updateJob, deleteJob, getJob } = require('../controllers/jobs');
const jobRouter=express.Router();

jobRouter.route('/').get(getAllJobs).post(createJob)
jobRouter.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)

module.exports={
    jobRouter
}