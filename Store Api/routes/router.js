const express=require('express');
const { getAllProductsStatic, getAllproducts } = require('../controller/productController');
const productsRouter=express.Router();

productsRouter.route('/').get(getAllproducts)
productsRouter.route('/static').get(getAllProductsStatic)

module.exports=productsRouter