const jwt=require("jsonwebtoken")

const authMiddleware=async(req,res,next)=>{
  const token=req.cookies.token;
  if(!token){
    return res.status(401).json({message:"unauthorzied access!"})
  }
}
try{
  const verify=jwt.verify(token,process.env.TOKEN_KEY)
    req.user=verified
    next();
  
}catch(err){
  res.status(401).json({message:"invalid authroiztion!"})
}