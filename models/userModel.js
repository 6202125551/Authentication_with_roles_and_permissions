const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide the name"]
    },
    email:{
        type:String,
        required:[true, "Please provide the email"]
    },
    password:{
        type:String,
        required:[true, "Please provide the password"]
    },
    roles:{
        type:Number,
        default:0 // 0-> Normal user, 1-> Admin, 2 -> sub- admin, 3 -> editor
    }
})

module.exports = mongoose.model('User', userSchema)