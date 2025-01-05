const mongodb = require("mongoose");
const bcrypt=require("bcryptjs");

const userSchema=new mongodb.Schema({
    username:{
        type: String,
        required: true
        },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        Enum:['user','admin'],
        default:"user"
    }
})

userSchema.pre('save',async()=>{
    if(this.isModified('password')){
        this.password=await bcrypt.hashPassword(this.password,10);
    }
    next();
})


const usermodel=mongodb.model("Credentials",userSchema)


module.exports = usermodel;
