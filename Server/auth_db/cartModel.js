const mongodb=require("mongoose")

const schema=mongodb.Schema({
    bookName:{
        type:String
    },
    bookPrice:{
        type:String
    },
    bookImage:{
        type:String
    }


})
const cartModel=mongodb.model("CartList", schema)

module.exports=cartModel