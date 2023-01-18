const Sequelize = require('sequelize');
const sequelize = require('../db_utils/connection');
const Product =sequelize.define({
    id:{
        type:Sequelize.INTEGER,
        primarykey:true,
        autoIncrement:true,
        allowNull:false
    },
    avatar:{
        type:Sequelize.STRING,
        allowNull:false
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    {
        tableName: 'Product'
    }
    
});
module.exports = Product