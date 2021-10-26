const express = require('express');
const {registerPatient, findPatient} = require('../controllers/patientcontroller');
const {registerAdmin, getAdmin} = require('../controllers/admincontroller');
const { registerDoctor,getDoctor } = require('../controllers/doctorcontroller');
const {registerAppointment, getList} = require("../controllers/appointmentcontroller");
// const Patient = require('../models/patientmodel');
const router = express.Router();

router.post('/admin',registerAdmin);
router.post('/doctor',registerDoctor);
router.post('/patient',registerPatient);
router.post('/appointment',registerAppointment);
router.post('/adminhome',getAdmin);
router.post('/doctorhome',getDoctor);
router.post('/enquiry',findPatient);
router.get("/registerpatient",(req,res)=>{
    res.render("registerpatient");
});
router.get('/enquiry',(req,res)=>{
    res.render("enquiry");
});
router.get("/appointment-list",getList);


module.exports=router;