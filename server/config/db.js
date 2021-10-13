const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI,{
            
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log(`Mongodb Connected : ${conn.connection.host}`);
    }
    catch (err){
        console.log(`Error:${err.message}`);
        process.exit();
    }
}

module.exports=connectDB;