const express = require('express')
const router = express.Router()

const records = require('../data/records')

//records routes
router.get('/', (req, res)=>{
    res.json(records)
})

router.get('/:student_id', (req, res, next)=>{
    const record = records.find((record)=> record.student_id === +req.params.student_id);
    if(record) res.json(record);
    else next();
    
})

module.exports = router;