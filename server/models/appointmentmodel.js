const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    mobile:{
        type:Number
    },
    gender:{
        type:String
    },
    age:{
        type:Number
    },
    date:{
        type:String
    },
    address:{
        type:String
    },
    problem:{
        type:String
    }
})

const Appointment = mongoose.model("Appointment",appointmentSchema);

module.exports=Appointment;