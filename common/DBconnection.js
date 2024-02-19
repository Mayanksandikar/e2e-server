const mongo = require('mongodb')

const getConn=async ()=>{
const mongoClient= mongo.MongoClient 
var server =await mongoClient.connect("mongodb://127.0.0.1:27017");
var db = server.db("school");
return db

}

module.exports=getConn