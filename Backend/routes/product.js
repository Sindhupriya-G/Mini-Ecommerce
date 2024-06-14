const express=require('express');
const { getProduct, getSingleProduct } = require('../controller/productController');
const router=express.Router();

router.get('/products',getProduct);
router.get('/product/:id',getSingleProduct)

module.exports=router