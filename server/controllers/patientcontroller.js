const Patient = require("../models/patientmodel");

const registerPatient = async (req, res) => {
    try {
        const newpatient = new Patient({
            fname: req.body.fname,
            lname: req.body.lname,
            mobile: req.body.mobile,
            age: req.body.age,
            gender: req.body.gender,
            bloodgroup: req.body.bloodgroup,
            address: req.body.address,
            problem: req.body.problem
        })
        await newpatient.save();
        res.render("adminhome");
    }
    catch (error) {
        res.status(400).send({ error });
    }

}

const findPatient = async (req, res) => {


    await Patient.find({
        fname: req.body.fname
        // address:req.body.address
    })
        .then((data) => {
            if (!data) {
                res.status(404).send({ message: "user not found" })
            }
            else {


                res.render("enquirydisplay", { records: data });
                // res.send(data);
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "user not found" })
        })
}

module.exports = { registerPatient, findPatient };