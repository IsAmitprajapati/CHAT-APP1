const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())

const PORT = process.env.PORT || 8080

app.get('/',(request,response)=>{
    response.json({
        message : "Hello Sahil your server is running smoothly at" + PORT
    })
})

// api endpoint
app.use('/api',router)


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running at" + PORT)
    })
})

