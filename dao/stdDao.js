
const { ObjectId } = require('mongodb');
const getConn = require('../common/DBconnection')
const saveStd=async (dataObj)=>{

    const db= await getConn()
    const collection =db.collection('students')
    const result= await collection.insertOne(dataObj)
    return result
}

const getStd=async ()=>{
    
    const db= await getConn()
    const collection =db.collection('students')
    const result= await collection.find({}).toArray()
    return result
}

const updateStd = async (id, data) => {
    const db = await getConn();
    const collection = db.collection('students');
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
    return result;
};
 

const delStd=async (id)=>{
    const db = await getConn()
    const collection = db.collection('students')
    const result = await collection.deleteOne({_id:new ObjectId(id)} )
    return result


}

module.exports={
    saveStd,getStd,updateStd,delStd
}