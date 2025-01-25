const express=require("express");
const bmodel=require("../auth_db/bookList");
const slideModel=require("../auth_db/slidedb");

const router=express.Router();

router.get("/booklist", async(req,res)=>{
    try{
        const data=await bmodel.find();
        res.status(200).json(data);
        console.log("successfully fetched data");
    }catch(err){
        res.status(500).json("Error occur ",err);
    }
})

router.get("/slide", async(req,res)=>{
    try{
        const response=await slideModel.find();
        res.status(200).json(response);

    }catch(err){
        res.status(500).json({message:"internal server error"})
    }
})




module.exports = router;