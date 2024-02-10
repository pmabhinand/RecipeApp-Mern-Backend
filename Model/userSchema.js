//import mongoose
const mongoose = require('mongoose')

//creating schema(structure)
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
          
    },
    password:{
        type:String,
        require:true
    },
    profile:{
        type:String
    }

})

//creating model
const users = mongoose.model("users",userSchema)

//export model
module.exports = users