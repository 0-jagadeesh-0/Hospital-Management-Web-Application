const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const doctorSchema = new mongoose.Schema(
    {
        userid:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

doctorSchema.pre('save',function (next) {
    let user=this;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(saltRounds,function(err,salt){
        if(err) return next(err);

        bcrypt.hash(user.password,salt,function(err,hash){
            if(err) return next(err);
            user.password=hash;
            next();
        });
    });
});

doctorSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
    
};



const Doctor = mongoose.model('Doctor',doctorSchema);

module.exports=Doctor;