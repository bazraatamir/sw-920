const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');



router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../login.html'));
})
router.post('/',(req,res)=>{
    
    let users = fs.readFileSync(path.join(__dirname,'../users.json'),'utf-8');
    let students = JSON.parse(users)
    students.forEach((element)=>{
        if(req.body.un==element.username && req.body.pw==element.password){
            req.session.nevterlee = true;
          
            res.redirect('/')
        }else{
            res.send("faild...")
        }
    })
    
  
});
module.exports=router