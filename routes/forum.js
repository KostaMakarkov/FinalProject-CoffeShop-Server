

const express= require('express');
const router= express.Router();
const forumModel= require('../MODELS/forumModel');
const uniqId= require('uniqid');
const commentModel= require('../MODELS/commentsModel');


router.get('/', (req, res)=>{
    forumModel.find({},(err,data)=>{
    if(err){
      console.log(`Error with GET ${err}`);
    }
    else{
      res.send(data)
    }
  } )
});

router.get('/limited', (req, res)=>{
  forumModel.aggregate(
    [ { $sample: { size: 3} } ]
  ).then( data => {
    res.send(data);
  })
})
  

router.get('/forumPost/:postId',(req, res)=>{
    forumModel.find({postId:req.params.postId},(err,data)=>{
    if(err){
      console.log(`Error with GET ${err}`);
    }
    else{
      res.send(data)
    }
  } )
});

router.get('/userPost/:postEmail',(req, res)=>{
  forumModel.find({postEmail:req.params.postEmail},(err,data)=>{
  if(err){
    console.log(`Error with GET ${err}`);
  }
  else{
    res.send(data)
  }
} )
});

router.post('/', (req,res)=>{
    const newPostId = uniqId();
    const newPost = new forumModel({
          postId: newPostId,
          postEmail: req.body.postEmail,
          postTitle: req.body.postTitle,
          postContent: req.body.postContent,
          postCreator: req.body.postCreator,
          postDate: req.body.postDate
    })
    newPost.save().then(() => {console.log(`${req.body.postTitle} Saved In DB..`) 
})
res.send(`${newPost} Saved!`)
});

router.put('/', (req,res) => {
  const query= {postId:req.body.postId};
  forumModel.findOneAndUpdate(query, {$set: req.body}, (err,doc) => {
      err? res.status(500).send(err): res.send(doc);
  } 
      )});


router.delete('/:postId', (req,res,next) => {
  const deletedPost= `${req.body.postId}`;
  forumModel.findOneAndDelete({postId:req.params.postId},(err) => {
      if(err){
          console.log(err);
             }
      else{
          return console.log('Post has been deleted');
      }
    })
    next();
    })

module.exports = router;
