require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const connectDB = require('./config/database')
const PORT = process.env.PORT || 3001

connectDB(process.env.MONGO_URI)

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log("Database connection setup is done successfully")
// })
// .catch((e) => {
//     console.log(e)
// })


const app = express()
app.use(express.static('public'))
app.use(express.json())

app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.status(200).json({
        status:"Success",
        message:"Home page!!!..."
    })
})

app.listen(PORT, () =>{
    console.log(`server is listening at port ${PORT}`)
})
