const mongoose = require("mongoose")
const { type } = require("os")

const mySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    }

})

module.exports = mySchema;