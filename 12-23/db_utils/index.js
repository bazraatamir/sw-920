const pool = require('./connection');

async function getStudents(){
    const students = await pool.query(`select * from student`);
    return students
}
async function postStudents(arg){
    const data = await pool.query(`insert into student(firstname) value('${arg}')`);
    return data
}







module.exports={
    getStudents,
    postStudents
}