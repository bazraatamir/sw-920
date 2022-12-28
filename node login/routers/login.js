const express = require('express');
const router = express.Router();
const path = require('path')



router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../login.html'));
})
router.post('/',async(req,res)=>{
    res.redirect("/")
});
module.exports=router