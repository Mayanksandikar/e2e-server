const stdDao=require('../dao/stdDao')
const saveStd= async(dataObj)=>{
   
  const result = await stdDao.saveStd(dataObj)
  return result
}

const getStd=async()=>{
    const result = await stdDao.getStd();
    return result

}

const updateStd= async(id, data)=>{
   const result = await stdDao.updateStd(id ,data )
   return result

}
const deleteStd=async (id)=>{
  const result =await stdDao.delStd(id)
  return result

}

module.exports={
    saveStd,getStd,updateStd,deleteStd
}