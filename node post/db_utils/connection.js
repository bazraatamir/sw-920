const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const MongoConnect = callback=>{
    MongoClient.connect(
        'mongodb+srv://Project_admin:projectadmin1234@cluster0.z4ey3.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(result=>{
        console.log("success")
        callback(result)
    })
    .catch(err=>{
        console.log(err)
    })
}
module.exports = MongoConnect