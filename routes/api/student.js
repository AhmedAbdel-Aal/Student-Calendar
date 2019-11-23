const ObjectId = require("mongodb").ObjectID;
const axios = require('axios');
const express = require("express");
const router = express.Router();


router.post("/login", async(req,res)=>{
    
    user = req.body.username
    pass = req.body.password

    axios.get('https://my-json-server.typicode.com/AhmedAbdel-Aal/GUC_FAKE_API/credentials').
    then((res) => {
        // do something with Google res
        return res.data
      })
      .then((json) => {
        // do something with Apple res
        json.find(e=>{

            if(e.username === user && e.password === pass){
                return res.status(200).send({msg : "logged successfully"})
            }  
        })
        
        return res.status(200).send({msg : "wrong email or password"})


      })
      .catch((err) => {
        // handle err
        return res.status(400).send({error:"endpoint not found"}) 
      });

});


module.exports = router;
