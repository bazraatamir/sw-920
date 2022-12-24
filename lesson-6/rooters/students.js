const express = require('express');
const router = express.Router();
const {getStudetns,addStudent} = require('../db_utils');


router.get('/', async(req,res)=>{
    const students = await getStudetns();
       res.send(students);
    })
router.post('/',async(req,res)=>{
    const data = await addStudent();
    res.send(data)
    })

module.exports = router