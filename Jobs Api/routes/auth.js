const express=require('express');
const { registor, login } = require('../controllers/auth');
const authRouter=express.Router();

authRouter.route('/registor').post(registor);
authRouter.route('/login').post(login);

module.exports={authRouter};