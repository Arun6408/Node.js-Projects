require('./db/connect');
require('dotenv').config();

const express = require('express');
const app = express();

const tasks = require('./route/routes');
const connectDb = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');


// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);

// Not Found Middleware
app.use(notFound);

// Error Handling Middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
            console.log(`Connected to db`);
        });
    } catch (err) {
        console.log(err);
    }
}

start();
