const pool = require('./connection');

async function  getStudetns(){
    const [students] = await pool.query(`select * from student`,);
    return students
}

async function addStudent(){
    const data = await pool.query(`insert into student(firstname) value('${req.body.name}')`);
    return data
}



module.exports ={
   getStudetns,
   addStudent
}