const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong. Please try again later.',
  };
  if(err.name==="CastError"){
    customError.msg=`No Item Found with id ${err.value}`;
    customError.statusCode=StatusCodes.NOT_FOUND;
  }
  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors).map(item => item.message).join(', ');
  }
  if (err.name === 'MongoError' && err.code === 11000) {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field. Please choose another value.`;
  }
  
  res.status(customError.statusCode).json({ error: customError.msg });
};

module.exports = errorHandlerMiddleware;
