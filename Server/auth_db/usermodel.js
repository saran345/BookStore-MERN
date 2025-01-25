const mongodb = require("mongoose");
const bcrypt=require("bcryptjs");

const userSchema=new mongodb.Schema({
    username:{
        type: String,

        },
    password:{
        type:String,
    },
    email:{
        type:String,

    },
    role:{
        type:String,

    }
})

// userSchema.pre('save',async()=>{
//     if(this.isModified('password')){
//         this.password=await bcrypt.hashPassword(this.password,10);
//     }
//     next();
// })


const usermodel=mongodb.model("Credentials",userSchema)


module.exports = usermodel;
