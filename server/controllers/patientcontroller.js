const Patient = require("../models/patientmodel");

const registerPatient = async (req,res) =>{
    try{
        const newpatient = new Patient({ 
        fname:req.body.fname,
        lname:req.body.lname,
        mobile:req.body.mobile,
        age:req.body.age,
        gender:req.body.gender,
        bloodgroup:req.body.bloodgroup,
        address:req.body.address,
        problem:req.body.problem
        })
        await newpatient.save();
        res.json({status:"OK"});
    }
    catch(error)
    {
        res.status(400).send({error});
    }
    
}

module.exports={registerPatient};