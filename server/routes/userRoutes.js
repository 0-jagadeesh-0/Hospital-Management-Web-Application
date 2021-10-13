const express = require('express');
const { registerPatient } = require('../controllers/patientcontroller');
const {registerAdmin, getAdmin} = require('../controllers/admincontroller');
const { registerDoctor,getDoctor } = require('../controllers/doctorcontroller');
const router = express.Router();

router.post('/admin',registerAdmin);
router.post('/doctor',registerDoctor);
router.post('/patient',registerPatient);
router.post('/admin-login',getAdmin);
router.post('/doctor-login',getDoctor);


module.exports=router;