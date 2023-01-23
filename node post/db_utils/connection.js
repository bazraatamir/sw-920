const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;
const MongoConnect = callback=>{
    MongoClient.connect(
        'mongodb+srv://Project_admin:projectadmin1234@cluster0.z4ey3.mongodb.net/USERCRUD?retryWrites=true&w=majority'
    )
    .then(client=>{
        console.log("success");
        _db=client
        callback()
    })
    .catch(err=>{
        console.log(err)
    })
}


const getdb = ()=>{
    if(_db){
        return _db
    }
    throw "ogoggliin san oldsongvi"
}
exports.MongoConnect = MongoConnect,
exports.getdb = getdb