require("dotenv").config()
const jwt=require("jsonwebtoken")

const createToken=(user)=>{
    return jwt.sign({id:user},process.env.TOKEN_KEY,{
        expiresIn:"1h",
    })
}

module.exports =createToken