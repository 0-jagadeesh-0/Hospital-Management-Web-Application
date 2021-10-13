const Admin = require("../models/adminmodel");

const registerAdmin = async (req,res) =>{
    try{
        const newUser =await new Admin(req.body);
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

const getAdmin = async (req, res) => {
    try {
      const { userid, password } = req.body;
      const user = await Admin.findOne({ userid });
      if (user /* && (await user.matchPassword(password))*/ ) {
        res.json({
          _id:user.id,
          userid:user.userid,
        //   token:generateToken(user._id),
        });
      }
      else {
        res.status(400).send({message:"User Not Found."});
      }
    }
    catch (error) {
      res.status(404);
      throw new Error(error.message);
    }
  }
  

module.exports={getAdmin,registerAdmin};