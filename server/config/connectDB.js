const mongoose = require('mongoose')



async function connectDB(){
    try {
         await mongoose.connect(process.env.MONGODB_URI)

         const connection = mongoose.connection

         connection.on('connected',()=>{
            console.log("connected to DB")
         })
         connection.on('error',(error)=>{
            console.log("Error connecting to DB",error)
         })
    }catch (error) {
        console.log("something went wrong",error)
    }
}
module.exports = connectDB