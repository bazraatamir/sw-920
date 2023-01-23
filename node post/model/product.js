// const Sequelize = require('sequelize');
// const sequelize = require('../db_utils/connection');
const getdb =require('../db_utils/connection').getdb
class product {
    constructor(avatar,title,description,price){
        this.avatar=avatar,
        this.title=title,
        this.description=description,
        this.price=price
    }
   save = ()=>{
    let db = getdb();
    console.log(db.collection)
        db.collection('product')
        .insertOne(this)
        .then((result)=>{
            console.log(result)
        })
        .catch(err=>{
           throw err
        })
        

   }
}




module.exports = product