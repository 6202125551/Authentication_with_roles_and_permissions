const mongoose = require("mongoose")

const connectDB = async (uri) =>{
    return await mongoose.connect(uri).then(() => {
        console.log("Database is connected...")
    }).catch((e) => {
        console.log(e)
    })
}


module.exports = connectDB