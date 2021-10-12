const express=require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");



// Server 

const app = express();

// Middlewares 

const static_path=path.join(__dirname,"../client");

app.set("view engine","ejs");


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(static_path));


app.get("/",(req,res)=> {
    res.render("patient_registration");
})

app.get("/doctorinfo",(req,res)=>{
    res.render("doctorinfo");
})
app.get("/doctorinfo",(req,res)=>{
    res.render("doctorinfo");
})

app.get("/support",(req,res)=>{
    res.render("support");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})


app.listen(3000,function() {
    console.log("Server running");
})