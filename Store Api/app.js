require('dotenv').config()
require('express-async-errors')

const express=require('express');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
const connectDb = require('./db/connect');
const productsRouter = require('./routes/router');

const app = express();

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1> <a href="/api/v1/products">Link to products</a>');
});
app.use('/api/v1/products', productsRouter);

//notfound
app.use(notFound)

//errorHandler
app.use(errorHandlerMiddleware);


const port=process.env.PORT || 5000;

const start=async()=>{
    try{
        await connectDb(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server is Running on port ${port}`);
        });
    }
    catch(err){
        console.log(err);
    }
}

start();