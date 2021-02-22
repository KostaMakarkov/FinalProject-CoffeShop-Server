




const mongoose= require('mongoose');
const commentModel=  mongoose.Schema(
    {
        commentId: String,
        postId: String,
        commentBody: String,
        commentCreator: String,
        commentEmail: String,
        commentDate: String
    }
)

module.exports=mongoose.model('comments', commentModel);