const ObjectId = require("mongodb").ObjectID;
const axios = require('axios');
const express = require("express");
const router = express.Router();


router.post("/login", async(req,res)=>{
    
    user = req.body.user
    pass = req.body.pass
    let studentArray  = [] 

    axios.get('https://my.api.mockaroo.com/users.json?key=6bec3220').
    then((res) => {
        // do something with Google res
        studentArray =  res.data 
        console.log(res.data)
        return res.data
      })
      .then((json) => {
        // do something with Apple res
        json.find(e=>{

            if(e.username === user && e.password === pass){
                return res.status(200).send({msg : "logged successfully"})
            }
            else{
                // console.log("not matched")
                // console.log(e.username)
                
            }
        })
        return res.status(200).send({msg : "user not found"})

      })
      .catch((err) => {
        // handle err
        return res.status(400).send({error:"user/course not found"}) 
      });

});


module.exports = router;
