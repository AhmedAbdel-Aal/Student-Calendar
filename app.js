const express = require('express');
const mongoose = require('mongoose');

// API
const Deadline = require('./routes/api/Deadline')
const Students = require('./routes/api/student')
// set up express app
const app = express();
global.app = module.exports = express();

// ADD THIS
var cors = require('cors');
app.use(cors());

// mongo configure
const db = require("./config/keys").mongoURI;

//Connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
  
//Entry point
app.get('/',(req,res) =>{
  res.send(`<h1>STUDENT CALENDAR ENTERY PPINT</h1>`)
})

//Route handlers
app.use('/api/deadline',Deadline)
app.use('/api/student',Students)

//non existing routes
app.use((req,res,next)=>{
    const error = new Error("Can not find what you're looking for");
    error.status= 404;
    next(error);
 })

app.use((error,req,res,next)=>{
    res.status (error.status ||500);
    res.json({
        error :{
            msg : error.message
        }
    })
})

  
module.exports = app ;
