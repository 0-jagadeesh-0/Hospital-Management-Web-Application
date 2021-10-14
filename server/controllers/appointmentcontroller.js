const Appointment = require("../models/appointmentmodel");


const registerAppointment = async (req,res)=>{
    try {
        const newappoint = new Appointment({
            name:req.body.name,
            mobile:req.body.mobile
        })
        await newappoint.save();
        res.json({status:"OK"});
    } catch (error) {
        res.send({error});
    }
}

module.exports={registerAppointment};