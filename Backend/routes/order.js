const express=require('express');
const { createOrder } = require('../controller/orderController');
const router=express.Router()

router.post('/order',createOrder)

module.exports=router