const express = require('express');
const {registerPatient} = require('../controllers/patientcontroller');
const {registerAdmin, getAdmin} = require('../controllers/admincontroller');
const { registerDoctor,getDoctor } = require('../controllers/doctorcontroller');
const {registerAppointment} = require("../controllers/appointmentcontroller");
const router = express.Router();

router.post('/admin',registerAdmin);
router.post('/doctor',registerDoctor);
router.post('/patient',registerPatient);
router.post('/appointment',registerAppointment);
router.post('/adminhome',getAdmin);
router.post('/doctorhome',getDoctor);
router.get("/registerpatient",(req,res)=>{
    res.render("registerpatient");
});



module.exports=router;