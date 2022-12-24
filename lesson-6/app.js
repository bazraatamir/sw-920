const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send } = require("process");
const {getStudetns,addStudent} = require('./db_utils');
const indexRouter = require('./rooters');
const studentsRouter = require('./rooters/students')
const app = express();
//enivormental variable;
//GET POST PUT DELETE //crud
//body parser
app.use(express.json())

//router
app.use(['/','index'],indexRouter);
app.use('/students',studentsRouter);


app.listen(3000, async ()=>{
 console.log("server listen 3000port",)
})
//https://github.com/bazraatamir/SW920B
//bazraa1111
// hairtaishuu
//midelware
//rooter