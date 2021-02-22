

const express= require('express');
const router= express.Router();
const commentModel= require('../MODELS/commentsModel');
const uniqId= require('uniqid');



router.get('/', (req, res)=>{
    commentModel.find({},(err,data)=>{
    if(err){
      console.log(`Error with GET ${err}`);
    }
    else{
      res.send(data)
    }
  } )
});

router.get('/:postId',(req, res)=>{
    commentModel.find({postId:req.params.postId},(err,data)=>{
    if(err){
      console.log(`Error with GET ${err}`);
    }
    else{
      res.send(data)
    }
  } )
});

router.get('/userComments/:byEmail',(req, res)=>{
  commentModel.find({commentEmail:req.params.byEmail},(err,data)=>{
  if(err){
    console.log(`Error with GET ${err}`);
  }
  else{
    res.send(data)
  }
} )
});

router.post('/', (req,res,next)=>{
    const newCommentId = uniqId();
    const newComment = new commentModel({
          commentId: newCommentId,
          postId: req.body.postId,
          commentBody: req.body.commentBody,
          CcommentCreator: req.body.commentCreator,
          commentEmail: req.body.commentEmail,
          commentDate: req.body.commentDate
    })
    newComment.save().then(() => {console.log(`Saved In DB..`) 
})
res.send(`${newComment} Saved!`)
});

router.put('/', (req,res) => {
  const query= {postId:req.body.postId};
  commentModel.findOneAndUpdate(query, {$set: req.body}, (err,doc) => {
      err? res.status(500).send(err): res.send(doc);
  } 
      )});


router.delete('/:commentId', (req,res,next) => {
  const deletedComment= `${req.body.CommentId}`;
  commentModel.findOneAndDelete({commentId: req.params.commentId},(err) => {
      if(err){
          console.log(err);
             }
      else{
          return console.log(`${deletedComment} is deleted.`)
      }
    })
    next();
    });

router.delete('/deleteMany/:postId', (req,res,next) => {
  var myquery = { 'postId':  req.params.postId};
  commentModel.deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.deletedCount);
    console.log(      
    `Number Of Items Found : ${obj.n}  ,`+
    `Status : ${obj.ok}  ,` +
    `Number Of Items Deleted : ${obj.deletedCount}`);
  })
  next()
})

module.exports = router;
