const express=require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const connectDB = require("./server/config/db");
const dotenv = require("dotenv");
const userRoutes = require("./server/routes/userRoutes");

dotenv.config();


// Server 

const app = express();

// Database Connection 

//  connectDB();


// Middlewares 

const static_path=path.join(__dirname,"client");

app.set("view engine","ejs");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(static_path));

app.use("/",userRoutes);



app.get("/",(req,res)=> {
    res.render("home");
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
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/admin-login",(req,res)=>{
    res.render("adminlogin");
})


app.get("/doctor-login",(req,res)=>{
    res.render("doctorlogin");
})
app.get("/adminregister",(req,res)=>{
    res.render("adminregister");
})
app.get("/doctorregister",(req,res)=>{
    res.render("doctorregister");
})

app.get("/book-appointment",(req,res)=>{
    res.render("bookappointment");
})

app.get("/list",(req,res)=>{
    res.render("list");
})




app.listen(process.env.PORT||3000,function() {
    console.log("Server running");
})
