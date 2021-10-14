const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    name:{
        type:String
    },
    mobile:{
        type:Number
    },  
})

const Appointment = mongoose.model("Appointment",appointmentSchema);

module.exports=Appointment;