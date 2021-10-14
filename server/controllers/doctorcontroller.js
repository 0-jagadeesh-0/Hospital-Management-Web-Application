const Doctor = require("../models/doctormodel");

const registerDoctor = async (req,res) =>{
  try{
    const newUser = new Doctor({
      userid:req.body.userid,
      password:req.body.password
  })
      await newUser.save();
      res.render("doctorlogin");
  }
  catch(error)
  {
      res.status(400).send({error});
  }
  
}

const getDoctor = async (req, res) => {
  try {
    const { userid, password } = req.body;
    const user = await Doctor.findOne({ userid });
    if (user && (await user.matchPassword(password)) ) 
    {
      res.render("doctorhome");
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