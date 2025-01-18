const mongoose=require("mongoose");

const schema=mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String

})


const ContactModel=mongoose.model("ContactDetails",schema)
module.exports=ContactModel