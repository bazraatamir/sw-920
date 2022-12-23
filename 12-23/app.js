const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send, argv } = require("process");
const indexRouter = require("./routers")
const studentsRouter = require('./routers/students')
const app = express();
//enivormental varaible
//GET POST PUT DELETE //crud
app.use(express.json())
app.use(["/",'index'],indexRouter);
app.use('/students',studentsRouter)
app.listen(3000, async ()=>{
 console.log("server listen 3000port",)
})

//mindelware
// function myfunctoin(req,res,next){

// }
//rooters
//frontend style



//https://github.com/bazraatamir/sw-920
//bazraa1111
// hairtaishuu
