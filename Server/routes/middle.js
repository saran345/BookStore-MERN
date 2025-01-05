const express = require("express");
const router= express.Router();
const usermodel=require("../auth_db/usermodel");
const {check,validationResult }=require("express-validator");

const validate=[
    check('email').isEmail().withMessage("Invalid Email"),

    check("username").isLength().withMessage("username must be above 5 letter"),

    check("role").isIn(['user','admin']).withMessage("Role must be Either user or Admin"),

    check("password").isStrongPassword().withMessage("password is too weak..."),
]

router.post("/usercredentials/register",validate,async(req,res)=>{
   try{
    const check=validationResult(req.body);

    if(check.isEmpty()) {
        res.status(400).json({error:"Credentials is Empty!!!"})
    }
    const add=new usermodel({
        username:check.username,
        password:check.password,
        role:check.role,
        email:check.email
    })
    await add.save();

    res.status(200).json({message:"successfully register"})

   }catch(err){
    res.status(500).json({error:"Internal server error"})
   }

})



router.post("/usercredentials/login",async(req,res)=>{
   try{

    const {username,password}=req.body

    const user=usermodel.findOne({username:username});
    if(!user){
        res.status(404).json({error:"user not found!!!"})
    }
    const checkPass=await bcrypt.compare(password,user.password);
    if(checkPass){
        if(user.role=="admin"){
            redirect("www.google.com");
        }else if(user.role=="user"){
            redirect("www.facebook.com");
        }

    }else{
        console.log("invalid credentials")
        res.status(404).json({error:"invalid user credentials"})
    }

   }catch(err){
    res.status(500).json({error:"internal server error"})
   }
})


module.exports = router;