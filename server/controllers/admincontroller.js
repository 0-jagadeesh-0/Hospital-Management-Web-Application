const Admin = require("../models/adminmodel");



const registerAdmin = async (req,res) =>{
    try{
      const newUser = new Admin({
        userid:req.body.userid,
        password:req.body.password
    })
        await newUser.save();
        res.render("adminlogin");
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
      if (user && (await user.matchPassword(password)) ) 
      {
        res.render("adminhome");
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
  

module.exports={getAdmin,registerAdmin};