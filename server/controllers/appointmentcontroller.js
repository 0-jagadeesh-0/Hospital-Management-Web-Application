const Appointment = require("../models/appointmentmodel");


const registerAppointment = async (req,res)=>{
    try {
        const newappoint = new Appointment({
            fname:req.body.fname,
            lname:req.body.lname,
            mobile:req.body.mobile,
            age:req.body.age,
            problem:req.body.problem,
            date:req.body.date


        })
        await newappoint.save();
        res.json({status:"OK"});
    } catch (error) {
        res.send({error});
    }
}

const getList = async (req,res) => {
    try
    {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = yyyy+'-'+mm+'-'+dd;
        var todate = today.substring(0,10);
        
        await Appointment.find({today:todate})
        .then((data)=>{
            if(data)
            {
                res.render("list",{records:data,tdate:today})
            }
            else
            {
                res.send({message:"no"});
            }
        })
      
    }
    catch(err)
    {
        res.send({err});
    }
}

module.exports={registerAppointment,getList};