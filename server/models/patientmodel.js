const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
    {
        fname:{
            type:String,


        },
        lname:{
            type:String,
            
        },
        mobile:{
            type:String,
           
        },
        age:{
            type:String,
           
        },
        gender:{
            type:String,
           
        },
        bloodgroup:{
            type:String,
           
        },
        address:{
            type:String,
           
        },
        problem:{
            type:String,
           
        },

    }
)

const Patient = mongoose.model("Patient",patientSchema);

module.exports=Patient;