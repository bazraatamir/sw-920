const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const { send } = require('process');
const { error } = require('console');



const app = express();
app.use(express.json())
let students 

app.use("/public",express.static('public'))
app.get(['/','/index'],(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
});

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'/about.html'))
})

app.get('/students',(req,res)=>{
    res.send(students)
});

app.post('/students', async(req,res)=>{
   
        students.push({id:students.length+1,name:req.body.name});
        let student = await fs.writeFile(path.join(__dirname,'/students.json'),JSON.stringify( students,null,2))
        res.send(student);
    
 

});

app.delete('/students/:id',(req,res)=>{
    let studentsId =  students.findIndex((elements)=>{
        return elements.id==req.params.id
    });
    students.splice(studentsId,1);
    res.send("success")
    
});


app.listen(3000, async()=>{
        let data = await fs.readFile(path.join(__dirname,"students.json"),'utf-8')
        students = JSON.parse(data);
    console.log("server listen 3000 port")
})
//https://github.com/bazraatamir/sw-920