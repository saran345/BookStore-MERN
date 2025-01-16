const express = require("express");
const router= express.Router();
const bcrypt = require("bcryptjs");
const usermodel=require("../auth_db/usermodel");
const jwt=require("jsonwebtoken")
const createToken=require("../Utils/SecretToken");


router.get("/get", function(req, res,){
    res.send("hello world");
})


router.post("/register",async(req,res)=>{
     console.log(req.body);
    try{
        // const {username,password,email,role}=req.body;

        const hashed=await bcrypt.hash(req.body.password,10);

        const add=new usermodel({
            username:req.body.username,
            email:req.body.email,
            password:hashed,
            role:req.body.role,
        })
        await add.save();
        const token=createToken(add._id)
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: true,
          secure: false,
          sameSite:"strict"
        });
    res.status(200).json({message:"successfully register"})

   }catch(err){
    res.status(500).json({error:"Internal server error",detials:err.message})
   }

})


router.post("/login",async(req,res,next)=>{
   try{
   const {email,password}=req.body
      const user=await usermodel.findOne({email:email})
      if(!user){
        return res.status(404).json({error:"not found user",err})
      }
      const checkPass=await bcrypt.compare(password,user.password)

    if(checkPass){
      console.log("matched!")

    }else{
        console.log("invalid credentials")
    }
    const token=createToken(user._id)
    res.cookie("token",token,{
      withCredentials:true,
      httpOnly:true,
      secure:false,
      sameSite:"strict"
    })

        res.status(200).json({message:"login successfully!"})
        next();
   }catch(err){
    res.status(500).json({error:"internal server error",err})
   }
})


module.exports = router;