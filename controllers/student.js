const e = require('express');
var express = require('express');
var router = express.Router();
var stdService =require('../services/stdService')
router.post('/save-std', async function (req, res, next) {
  try{
    const dataObj = req.body.data
   const result = await stdService.saveStd(dataObj)
   res.send(result)
  }catch(e){
    console.log(e)
    res.send(e)
  }
    
});

  router.put('/update-std', async function (req, res , next)  {
    try {
      const id = req.query.id;
      const data = req.body.data;
      const result = await stdService.updateStd(id, data);
      res.send(result);
    } catch (e) {
      console.error(e);
      res.status(500).send('Internal Server Error');
    }
  });

router.delete('/del-std/:id',async function (req, res, next) {
try{
  const id=req.params.id
  const result = await stdService.deleteStd(id)
  return result

}catch{
  console.log(e)
  res.send(e)
}
});

router.get('/get-std',async function   (req, res) {
  const result = await stdService.getStd()
  res.send(result)
   
});

module.exports = router;
