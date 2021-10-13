const Doctor = require("../models/doctormodel");

const registerDoctor = async (req,res) =>{
    try
    {
        const newUser =await new Doctor(req.body);
        await newUser.save();
        res.status(201).send({
            _id:newUser.id,
            userid:newUser.userid,
            password:newUser.password
          }); 
    }
    catch(error)
    {
        res.status(400).send({error});
    }
    
}

const getDoctor = async (req, res) => {
    try 
    {
      const { userid, password } = req.body;
      const user = await Doctor.findOne({ userid });
      if (user) 
      {
        res.json({
          _id:user.id,
          userid:user.userid
        });
      }
      else 
      {
        res.status(400).send({message:"User Not Found."});
      }
    }
    catch (error) {
      res.status(404);
      throw new Error(error.message);
    }
  }




module.exports={registerDoctor,getDoctor};