//import mongoose
const mongoose = require('mongoose')


//creating schema
const saveSchema = new mongoose.Schema({
    recipeName:{
        type:String,
        require:true
    },
    introduction:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    ingredients:{
        type:String,
        require:true
    },
    preparation:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})



//creating model
const saves = mongoose.model("saves",saveSchema)

//export
module.exports = saves