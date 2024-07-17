const express = require('express')
const router = express.Router()

const records = require('../data/records')

//records routes
router.get('/', (req, res)=>{
    res.json(records)
})

router.get('/:id', (req, res, next)=>{
    const record = records.find((record)=>{
        if(record.id == req.params.id){
            return true;
        }
    })
    if(record) res.json(record)
})

module.exports = router;