const express=require("express");

const cmodel=require("../auth_db/contactModel")
const router=express.Router();


router.post("/contact",async(req,res)=>{
    const data=req.body;
    if(!data){
            return res.status(400).send({message:"Empty data"})
    }
   try{

    const contact=new cmodel({
        name:data.name,
        email:data.email,
        subject:data.subject,
        message:data.message,
    })
    await contact.save()
    res.status(200).json({message:"Message Received!"})

   }catch(err){
    res.status(500).send(err);
    console.log(err);
   }

})


module.exports = router;