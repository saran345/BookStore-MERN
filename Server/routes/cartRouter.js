const express=require("express");
const bmodel=require("../auth_db/bookList");
const cmodel=require("../auth_db/cartModel");
const { default: mongoose } = require("mongoose");
const slideModel = require("../auth_db/slidedb");

const  router=express.Router();

router.get("/getcart",async(req,res)=>{
    try{
        const response=await cmodel.find();
         res.status(200).json({response});
        console.log("display the cart List!!");

    }catch(err){
        res.status(500).send("Internal server error!");
    }
})


router.post("/bookId/:id",async(req,res,next) => {
     const data=req.params.id;
     console.log(data);
    try{
        const cartId=await bmodel.findById(data) || await slideModel.findById(data);

        if(!cartId){
             return  res.status(404).json({message:"item not found!"})
        }
        const  cart=await cmodel.create({
            bookId:cartId._id,
            bookName:cartId.bookName,
            bookPrice:cartId.bookPrice,
            bookImage:cartId.bookImage
        })
        await cart.save()
        console.log("Book Added cart successfully!",cart)
        res.status(200).json({message:"Book Added Successfully!"})
    }catch(err){
            res.status(500).json({error:"Internal server error",err})
        }
    }


)
router.delete("/bookId/:id",async(req,res,next)=>{
   try{
    await cmodel.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"delete successfully!"})
   }catch(err){
    res.status(500).json({error:"internal server error occur",})
   }
})



// router.post("/bookId/:id",async(req,res,next)=>{
//     const data=req.params.id;
//     console.log(data);
//    try{
//        const cartId=await bmodel.findById(data);

//        if(!cartId){
//             return  res.status(404).json({message:"item not found!"})
//        }
//        const  cart=await cmodel.create({
//            bookId:cartId._id,
//            bookName:cartId.bookName,
//            bookPrice:cartId.bookPrice,
//            bookImage:cartId.bookImage
//        })
//        await cart.save()
//        console.log("Book Added cart successfully!",cart)
//        res.status(200).json({message:"Book Added Successfully!"})
//    }catch(err){
//            res.status(500).json({error:"Internal server error",err})
//        }
//    })


module.exports = router;