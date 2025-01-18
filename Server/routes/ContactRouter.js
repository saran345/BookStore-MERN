const express=require("express");

const cmodel=require("../auth_db/contactModel")
const router=express.Router();


router.post("/contact",async(req,res)=>{
    const data=req.body;
   try{
    if(!data){
        return null;
    }
    const contact=new cmodel.create({
        name:data.name,
        email:data.email,
        subject:data.subject,
        message:data.message,
    })
    contact.save()
    res.status(200).json({message:"Message Received!"})

   }catch(err){
    res.status(500).send(err);
   }

})


module.exports = router;