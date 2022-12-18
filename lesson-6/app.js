const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send } = require("process");
const {getStudetns,addStudent} = require('./db_utils')
const app = express();
//GET POST PUT DELETE //crud
app.use(express.json())
let students;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/students', async(req,res)=>{
const students = await getStudetns()
   res.send(students)
})


app.post('/students',async(req,res)=>{
const data = await addStudent();
res.send(data)
})
app.delete('/students/:id',(req,res)=>{
   
})


app.listen(3000, async ()=>{
 console.log("server listen 3000port",)
})
//https://github.com/bazraatamir/SW920B
//bazraa1111
// hairtaishuu
