const express=require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Server 

const app = express();

// Middlewares 

const static_path=path.join(__dirname,"../client/pages/home.html");

app.use(express.static(static_path));

app.get("/",function (req,res) {
    res.send("hello");
})
app.listen(3000,function() {
    console.log("Server running");
})