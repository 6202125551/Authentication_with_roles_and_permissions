const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide the Category name"]
    }
   
})

module.exports = mongoose.model('Category', categorySchema)