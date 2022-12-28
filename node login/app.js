const { constants } = require("buffer");
const express = require("express");
const { send, argv } = require("process");
const indexRouter = require("./routers")
const LoginRouter = require('./routers/login')
const registerRouter = require('./routers/register')
const app = express();
//enivormental varaible
//GET POST PUT DELETE //crud
app.use('/public',express.static('public'))
//body parser
app.use(express.json())
//routing
app.use(["/",'index'],indexRouter);
app.use('/login',LoginRouter)
app.use('/SingUp',registerRouter)
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
