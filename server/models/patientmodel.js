const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    fname:{
        type:String,
        reqired:true
    },
    lname:{
        type:String,
        reqired:true
    },
    mobile:{
        type:Number,
        reqired:true
    },
    gender:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    problem:{
        type:String,
        required:true
    }
})

const Patient=mongoose.model('Patient',patientSchema);