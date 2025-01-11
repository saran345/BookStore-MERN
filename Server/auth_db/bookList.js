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

const bookModel=mongodb.model("BookList", schema)

module.exports=bookModel