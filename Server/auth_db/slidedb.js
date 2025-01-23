const mongoose=require("mongoose")

const scheme=mongoose.Schema({
    bookName:String,
    bookImage:String,
    bookPrice:String,
})

module.exports = mongoose.model("bookSlide",scheme)