const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path')
const app = express();

//GET POST PUT DELETE //crud
app.use(express.json())
let students;
app.get('/students',(req,res)=>{
    res.send(students)
})


app.post('/students',(req,res)=>{
    students.push({id:students.length+1,name:req.body.name});
    res.send('sucsess')
})
app.listen(3000, async()=>{
 const File =  await fs.readFile(path.join(__dirname,"/students.json"),"utf-8")
 students = JSON.parse(File);
 console.log(students);
    console.log("server listen 300port")
})