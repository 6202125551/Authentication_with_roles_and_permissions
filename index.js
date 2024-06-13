require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.status(200).json({
        status:"Success",
        message:"Home page!!!"
    })
})

app.listen(PORT, () =>{
    console.log(`server is listening at port ${PORT}`)
})
