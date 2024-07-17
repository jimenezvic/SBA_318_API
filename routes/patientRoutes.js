const express = require('express')
const router  = express.Router()

const patients = require('../data/patients')




//CREATE - POST- creating new patient
router.post('/', (req,res)=>{
    if(req.body.student_id && req.body.name && req.body.education && req.body.gpa){
        if(patients.find((p)=> p.student_id == req.body.student_id)){
            res.json({error: 'student already registered'})
            return;
        }
        const patient = {
            student_id: patients[patients.length -1].student_id + 1,
            student_id: req.body.student_id,
            name: req.body.name,
            education: req.body.education,
            gpa: req.body.gpa,

        };

        patients.push(patient);
        res.json(patients[patients.length -1]);

    }else{
        res.json({error: 'Please, provide more info'})
    }
})


// Index- get all patients
router.get('/', (req, res)=>{
    res.json(patients)
})



router.get('/:student_id', (req, res,next)=>{
    console.log("GET REQUEST BY STUDENT ID",req.params)
    const patient = patients.find((patient)=> {
        if(patient.student_id == req.params.student_id){
            return true;
        }
    })
    if(patient) res.json(patient)
})

//UPDATE - PATCH - Update a patiend (student_id)
router.patch('/:student_id', (req, res, next)=>{
    const patient = patients.find((patient, i)=>{
        if(patient.student_id === +req.params.student_id){
            for(const key in req.body){
                patients[i][key]=req.body[key]
            }
            return true
        }
    })
    if(patient) res.json(patient)
        else next()
})

//DELETE
router.delete('/:student_id', (req,res,next)=>{
    const patient = patients.find((patient, i)=>{
        if(patient.student_id === +req.params.student_id){
            patients.splice(i,1);
            return true;
        }
    })
    if(patient) res.json(patient);
    else next();
});

module.exports = router