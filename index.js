const express = require('express')
const app = express()
const port = 5000

const patients = require('./data/patients')
const patientRoutes = require('./routes/patientRoutes');
const recordRoutes = require('./routes/recordRoutes');
const bodyParser = require('body-parser')


//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json({extended:true}))
app.use(express.json())

app.use('/patients', patientRoutes)
app.use('/records', recordRoutes)

//Routes
app.get('/', (req,res)=>{
    res.send('Home Route')
})



//MIDDLEWARE FUNCTION TO HANDLE 404 ERRORS
app.use((req, res)=>{
    res.status(404).json({
        error: '404 not found'
    })
})
//MIDDLEWARE HANDLE ERRORS
app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).json({
        error: 'Something went wrong!'
    })
})

//server listener
app.listen(port, ()=> console.log(`API Server is running on port ${port}`))

