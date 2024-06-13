const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Please provide the name"]
    },
    description:{
        type:String,
        required:[true, "Please provide the email"]
    },
    category:{
        type:Array,
        required: false
    }
})

module.exports = mongoose.model('Post', postSchema)