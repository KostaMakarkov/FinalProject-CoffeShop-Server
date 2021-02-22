
const express= require('express');
const router= express.Router();
const menuModel= require('../MODELS/menuModel');
const uniqId= require('uniqid');


router.get('/', (req, res)=>{
  menuModel.find({}, (err,data)=>{
    if(err){
      console.log(`Error with GET ${err}`);
    }
    else{
      res.send(data)
    }
  } )
});

router.get('/getSingleDish/:dishId', (req, res)=>{
  menuModel.find({dishId:req.params.dishId}, (err,data)=>{
    if(err){
      console.log(`Error with GET ${err}`);
    }
    else{
      res.send(data)
    }
  } )
});

router.get('/:dishCategory', (req, res)=>{
  menuModel.find({dishCategory:req.params.dishCategory}, (err,data)=>{
    if(err){
      console.log(`Error with GET ${err}`);
    }
    else{
      res.send(data)
    }
  } )
});

router.post('/', (req,res)=>{
  const newDishId= uniqId();
  const newDish= new menuModel({
        dishId: newDishId,
        dishName: req.body.dishName,
        dishPicture: req.body.dishPicture,
        dishCategory: req.body.dishCategory,
        dishSize: req.body.dishSize,
        dishPrice: req.body.dishPrice,
        dishDescription: req.body.dishDescription,
        dishVeganOption: req.body.dishVeganOption
  })
  newDish.save().then(() => {console.log(`${req.body.dishName} Saved In DB..`)

})
res.send(`${newDish} Saved!`)
});

router.put('/', (req,res)=> {
  const query= {dishId:req.body.dishId};
  menuModel.findOneAndUpdate(query, {$set: req.body}, (err,doc) => {
      if(err){
        console.log(err);
      }
      else{
        res.status(200).send(doc);
      }
  } 
      )});


router.delete('/:dishId', (req,res,next)=> {
  console.log(req.params.dishId);
  menuModel.findOneAndDelete({dishId:req.params.dishId},(err) => {
      if(err){
          console.log(err);
             }
      else{
          return console.log(`Dish is deleted.`)
      }
    })
    next();
    })

module.exports= router;
