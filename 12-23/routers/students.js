const express = require('express');
const {getStudents,postStudents} = require('../db_utils');
const router = express.Router();

router.get('/', async(req,res)=>{
try{
    const [students] = await getStudents();
    res.send(students)
}
catch (err){
    console.error(err);
    return err
}

})


router.post('/',async(req,res)=>{
const data = await postStudents(req.body.name)
res.send(data)
});
module.exports=router