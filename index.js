const express = require('express');
const mongoose = require('mongoose');
const Deadline = require('./routes/api/Deadline')
const app = express();

//mongoose
  //.connect(db, { useNewUrlParser: true })
  //.then(() => console.log("Connected to MongoDB"))
  //.catch(err => console.log(err));

  app.use(express.json())
  app.use(express.urlencoded({extended: false}))
  
  app.use('/api/deadline',Deadline)
  
  app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))
  
  const port = process.env.PORT || 3000
  app.listen(port, () => console.log(`Server on ${port}`))