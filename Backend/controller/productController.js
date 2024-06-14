const productModel=require('../models/productModel')

//get products
exports.getProduct=async (req,res,next)=>{
    const query=req.query.keyword?{ name:{
         $regex: req.query.keyword,
         $options:'i'
        }}:{}
        const products=await productModel.find(query);
        res.json({
            success:true,
            products
        })
}
    // try{
    //     const products= await productModel.find({})

    //     res.json({
    //         success:true,
    //         products
    //         })
    // }catch(error){
    //     res.status(404).json({
    //         success:false,
    //         message:error.message
    //     })
    // }
    

//get single product
exports.getSingleProduct=async(req,res,next)=>{
    try{
        const product=await productModel.findById(req.params.id);
        res.json({
            success:true,
            product
        })
    }catch(error){
        res.status(404).json({
            success:false,
           message:'unable to get product with that ID'
        })
    }
}
   