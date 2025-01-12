const express=require("express");
const bmodel=require("../auth_db/bookList");


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



module.exports = router;