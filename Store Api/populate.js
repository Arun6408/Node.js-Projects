require('dotenv').config();

const connectDb = require('./db/connect');
const product = require('./model/productModel');
const productsJSON = require('./products.json');


const start=async()=>{
    try{
        await connectDb(process.env.MONGO_URI);
        product.deleteMany();
        product.create(productsJSON);
        console.log("Successfully added the Products!! You can contiue with running the server");
        console.log("connected!!!");
        process.exit(0);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
start();