const Patient = require("../models/patientmodel");

const registerPatient = async (res,req) =>{
    try 
    {
        const newUser = await new Patient(req.body);
        await newUser.save();
        res.status(201).send({
            _id:newUser.id,
            userid:newUser.userid,
          }); 
    } 
    catch (error) 
    {
        res.status(400).send({message:"User Already Exists."})
    }
}



module.exports={registerPatient};