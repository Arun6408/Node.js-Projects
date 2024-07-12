require('dotenv').config();
require('express-async-errors');
const {StatusCodes}=require('http-status-codes')
const express = require('express');
const app = express();

//includes
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const { authRouter } = require('./routes/auth');
const { jobRouter } = require('./routes/jobs');
const { authenticationMiddleware } = require('./middleware/authentication');
const helmet=require('helmet');
const cors=require('cors');
const xss=require('xss-clean');
const rateLimiter=require('express-rate-limit');

//Middleware
app.set('trust proxy',1); //for Proxy servers
const limiter=rateLimiter({
  windowMs:15 * 60 * 1000, //15 minutes
  max:100  // limits each ip to 100 requests per windowMs :15 minutes
})
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());


//routes
app.get('/', (req, res) => {
  res.send('jobs api');
});
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',authenticationMiddleware,jobRouter);


//Handling Middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

//Start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI) 
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    res.status(StatusCodes.SERVICE_UNAVAILABLE).json({ error: 'Database connection error. Please try again later.' });
  }
};

start();