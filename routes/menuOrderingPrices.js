const express= require('express');
const router= express.Router();
const menuOrderingPrices= require('../MODELS/menuOrderingPrices');

router.get('/', (req, res)=>{
    menuOrderingPrices.find({}, (err,data)=>{
      if(err){
        console.log(`Error with GET ${err}`);
      }
      else{
        res.send(data)
      }
    } )
  });




module.exports= router;